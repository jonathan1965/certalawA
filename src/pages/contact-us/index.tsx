import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import CallIcon from '@mui/icons-material/Call';
import Header from 'modules/_partials/Header';
import Footer from 'modules/_partials/Footer';
import Image from 'next/image';

const ContactPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>CERTA LAW</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col h-screen overflow-y-auto">
        <Header />
        <div className="relative bg-primary p-4 md:p-8 cursor-default flex flex-col items-center justify-center  min-h-[60vh] w-full bg-center bg-no-repeat bg-cover">
          <Image
            src="/assets/images/Labour.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
            loading="lazy"
            objectPosition="top"
            className="top-0 absolute z-0"
          />{' '}
        </div>
        <div className="bg-primary cursor-default flex flex-col items-center justify-center">
          <div className="hidden text-white w-full md:max-w-6xl">
            <h2 className="text-2xl text-white md:text-4xl font-bold">
              The Certa Law Foundation.
            </h2>
            <h2 className="mt-1 italic">Justice for everyone</h2>
          </div>
        </div>
        <div className="bg-white p-4 md:px-8 py-8 md:py-12 flex flex-col items-center flex-grow w-full">
          <div className="w-full md:max-w-6xl grid md:grid-cols-2 gap-x-12 gap-y-5">
            <div className="flex flex-col">
              <h1 className="text-primary text-xl md:text-2xl font-semibold pb-4">
                Request a free consultation!
              </h1>
              <p className="mt-2">
                If you are looking for more information, need to talk
                to us, or want to chat about any of your service
                needs, then you've come to the right place.
              </p>
              <p className="text-red-500">www.certalaw.rw</p>
              <div className="grid md:grid-cols-2 mt-6">
                <div className="flex flex-col">
                  <p className="font-semibold text-primary">
                    Mrs. Florida Kabasinga
                  </p>
                  <p className="font-semibold text-primary">
                    Managing Partner
                  </p>
                  <p className="mt-2 text-red-500">
                    Tel: +250 788 309 964
                  </p>
                  <p className="text-red-500">
                    Email: fkabasinga@certalaw.rw
                  </p>
                </div>
              </div>
              <div className="w-full h-[1px] bg-primary bg-opacity-25 my-4" />
              <div className="inline-grid items-center gap-x-10 sm:grid-cols-2">
                <div className="flex flex-col text-sm">
                  <p className="uppercase">OFFICES:</p>
                  <p className="">
                    KN 4 Avenue, Kigali <br />
                    1st Floor, ECD Plaza
                  </p>
                  <p>P.O.Box 7354</p>
                  <p>info@certalaw.rw</p>
                  <p>www.certalaw.rw</p>
                </div>
                <CallIcon fontSize="large" className="text-primary" />
              </div>
            </div>
            <iframe
              title="Ishami"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5150.51868823656!2d30.05845247599721!3d-1.9539989980282895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca5a4a3e829b1%3A0xa25906199413833d!2sECD%20Plaza!5e1!3m2!1sen!2srw!4v1726578065419!5m2!1sen!2srw"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              className="mt-8"
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
