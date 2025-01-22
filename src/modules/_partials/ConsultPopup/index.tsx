import React from 'react';
import Drawer from '@mui/material/Drawer';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Close } from '@mui/icons-material';

const ConsultPopup = () => {
  const [loading, setLoading] = React.useState(false);
  const [messages, setMessages] = React.useState({
    success: '',
    fail: '',
  });
  const [errors, setErrors] = React.useState<any>({});
  const [consult, setConsult] = React.useState({
    name: '',
    email: '',
    consultCase: '',
  });
  const [toggle, setToggle] = React.useState(false);
  const toggleDrawer = (open: boolean) => (event: any) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setToggle(open);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setToggle(false);
    }
  };

  const onChangeInput = ({ target: { name, value } }: any) => {
    setErrors({ ...errors, [name]: null });
    setConsult({ ...consult, [name]: value });
  };
  const validateInput = () => {
    let isValid = true;
    if (!consult.name.trim()) {
      setErrors((prev: any) => ({
        ...prev,
        name: 'Name is required',
      }));
      isValid = false;
    }
    if (!consult.email.trim()) {
      setErrors((prev: any) => ({
        ...prev,
        email: 'Email is required',
      }));
      isValid = false;
    }
    if (!consult.consultCase.trim()) {
      setErrors((prev: any) => ({
        ...prev,
        consultCase: 'Case is required',
      }));
      isValid = false;
    }
    return isValid;
  };

  const onSubmit = async (event: any) => {
    event.preventDefault();
    if (validateInput()) {
      setLoading(true);
      await axios
        .post('/api/consult', consult)
        .then(response => {
          if (response.data) {
            setConsult({
              name: '',
              email: '',
              consultCase: '',
            });
            setMessages({
              success: 'Your case has been sent successfully',
              fail: '',
            });
          }
        })
        .catch(error => {
          setMessages({
            success: '',
            fail: 'Something went wrong, try again',
          });
        });
      setLoading(false);
      setTimeout(() => {
        setMessages({ fail: '', success: '' });
      }, 5000);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setToggle(true)}
        className="bottom-4 right-6 md:right-10 md:bottom-8 absolute uppercase font-semibold text-white"
      >
        REQUEST FREE CONSULTATION
      </button>
      <Drawer
        anchor="top"
        open={toggle}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiPaper-elevation': {
            // maxWidth: '100%',
            // minHeight: '100vh',
            marginX: 'auto',
            top: '6rem',
            backgroundColor: 'transparent',
            boxShadow: 'none',
          },
        }}
      >
        <div className="flex p-4 md:px-12 flex-col max-w-sm md:max-w-2xl w-full bg-[#D9D9D9B2] mx-auto">
          <div className="flex items-center space-x-3 justify-between mb-4">
            <h1 className="text-xl">REQUEST FREE CONSULTATION</h1>
            <button
              type="button"
              onKeyDown={handleKeyDown}
              onClick={() => setToggle(false)}
              className=""
            >
              <Close />
            </button>
          </div>

          {messages.fail && (
            <p className="px-3 py-3 mb-2 bg-red-500 text-white rounded-lg">
              {messages.fail}
            </p>
          )}
          {messages.success && (
            <p className="px-3 py-3 mb-2 bg-green-500 text-white rounded-lg">
              {messages.success}
            </p>
          )}

          <form onSubmit={onSubmit}>
            <label
              htmlFor="name"
              className="flex flex-col text-brand-black"
            >
              <span>Name</span>
              <input
                type="text"
                name="name"
                value={consult.name}
                onChange={onChangeInput}
                className="w-full mt-1 p-2 bg-white rounded-sm outline-none"
              />
              {errors.name && (
                <p className="text-red-500 mt-1">{errors.name}</p>
              )}
            </label>

            <label
              htmlFor="email"
              className="flex flex-col text-brand-black mt-3"
            >
              <span>Email address</span>
              <input
                type="email"
                name="email"
                value={consult.email}
                onChange={onChangeInput}
                className="w-full mt-1 p-2 bg-white rounded-sm outline-none"
              />
              {errors.email && (
                <p className="text-red-500 mt-1">{errors.email}</p>
              )}
            </label>

            <label
              htmlFor="consultCase"
              className="flex flex-col text-brand-black mt-3"
            >
              <span>Case</span>
              <textarea
                name="consultCase"
                value={consult.consultCase}
                rows={3}
                onChange={onChangeInput}
                className="w-full mt-1 p-2 bg-white rounded-sm outline-none resize-none"
              />
              {errors.consultCase && (
                <p className="text-red-500 mt-1">
                  {errors.consultCase}
                </p>
              )}
            </label>

            <button
              type="submit"
              disabled={loading}
              onClick={onSubmit}
              className="disabled:cursor-not-allowed disabled:bg-brand-yellow/25 font-semibold mt-6 text-white bg-brand-yellow rounded-lg px-12 py-3"
            >
              Submit
            </button>
          </form>
        </div>
      </Drawer>
    </>
  );
};

export default ConsultPopup;
