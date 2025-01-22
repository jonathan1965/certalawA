import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import Image from 'next/image';
import Header from 'modules/_partials/Header';
import InsightItem from 'modules/_partials/InsightItem';
import Footer from 'modules/_partials/Footer';

const Insights: NextPage = () => {
  return (
    <>
      <Head>
        <title>CERTA LAW</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col h-screen overflow-y-auto">
        <Header />
        <div className="flex flex-col flex-grow w-full">
          <div className="relative bg-primary p-4 md:p-8 cursor-default flex flex-col items-center justify-center  min-h-[40vh] w-full bg-center bg-no-repeat bg-cover">
            <Image
              src="/assets/images/book.jpg"
              alt=""
              layout="fill"
              objectFit="cover"
              loading="lazy"
              className="top-0 absolute z-0"
            />
            <div className="top-0 absolute w-full h-full flex flex-col justify-center md:max-w-6xl">
              <p className="text-xl md:text-3xl text-white">
                Insights.
              </p>
              <div className="mt-3 flex flex-col items-start text-lg md:text-xl text-white italic">
                <p>Be the first to learn about our knowledge</p>
                <p>& Expertise.</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 md:p-8 cursor-default flex flex-col items-center justify-center w-full">
            <div className="w-full md:max-w-6xl">
              <h1 className="text-primary italic flex w-full items-center space-x-3 text-lg md:text-xl font-semibold">
                <span>Recent.</span>{' '}
                <span className="h-0.5 opacity-25 w-64 md:w-92 bg-primary" />
              </h1>
              <div className="mt-3 grid sm:grid-cols-2 gap-3 md:grid-cols-4">
                <InsightItem />
              </div>
             

              <h1 className="mt-12 text-primary italic flex w-full items-center space-x-3 text-lg md:text-xl font-semibold">
                <span>Case summaries.</span>{' '}
                <span className="h-0.5 opacity-25 w-64 md:w-92 bg-primary" />
              </h1>

<h1 className="mt-12 text-primary italic flex w-full items-center space-x-3 text-lg md:text-xl font-semibold">
  <span>Others.</span>
  <span className="h-0.5 opacity-25 w-64 md:w-92 bg-primary" />
</h1>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Insights;
