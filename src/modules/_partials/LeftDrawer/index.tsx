import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Link from 'next/link';
import { useRouter } from 'next/router';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const LeftDrawer = ({ navs }: { navs: any[] }) => {
  const { pathname } = useRouter();
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

  return (
    <>
      <button
        type="button"
        className="relative group flex flex-col hover:text-white text-gray-300"
        onClick={() => setToggle(!toggle)}
      >
        <MenuIcon fontSize="large" />
        <span className="top-8 landingTexts text-sm absolute uppercase text-brand-yellow group-hover:block hidden">
          Menu
        </span>
      </button>
      <Drawer
        anchor="right"
        open={toggle}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{
            width: '100vw',
            backgroundColor: 'white',
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <div className="flex py-3 px-4 md:px-8 flex-col items-center min-h-screen overflow-y-auto w-full bg-[url(/assets/images/menu-bg.jpg)] bg-center bg-no-repeat bg-cover">
            <div className="w-full md:max-w-6xl flex-flex-col items-end">
              <button
                type="button"
                onKeyDown={handleKeyDown}
                className="landingTexts flex flex-col items-center ml-auto"
              >
                <CloseIcon fontSize="large" />
                <span className="text-sm landingTexts">ESC</span>
              </button>
              <div className="flex flex-col items-end mt-4">
                {navs.map((element: any) => {
                  const active = pathname === element.path;
                  return (
                    <Link key={element.label} href={element.path}>
                      <p
                        className={`text-xl md:text-3xl cursor-pointer flex items-center py-2 space-x-3 landingTexts ${
                          active
                            ? 'landingTexts'
                            : 'text-brand-gray hover:landingTexts hover:landingTexts'
                        }`}
                      >
                        {element.label}
                      </p>
                    </Link>
                  );
                })}
              
                
                <Link href="/contact-us">
                  <p
                    className={
                      pathname === '/contact-us'
                        ? 'landingTexts'
                        : 'text-brand-gray hover:landingTexts hover:font-semibold'
                    }
                  >
                    Contact
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </Box>
      </Drawer>
    </>
  );
};

export default LeftDrawer;
