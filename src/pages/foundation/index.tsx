import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import Image from 'next/image';
import Header from 'modules/_partials/Header';
import Footer from 'modules/_partials/Footer';
import FoundationArticle from 'modules/_partials/FoundationArticle';
import ProbonoArticle from 'modules/_partials/ProbonoArticle';
import DigitalGovernanceAritlce from 'modules/_partials/DigitalGovernanceAritlce';

const ProBrono: NextPage = () => {
  const governanceRef = React.useRef(null);
  const proBonoRef = React.useRef(null);

  const handleScrollIntoView = (element: any) => {
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest',
      });
    }
  };
  return (
    <>
      <Head>
        <title>CERTA LAW</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col h-screen overflow-y-auto">
        <Header>
          <div className="ml-auto flex items-center text-xs space-x-3 md:space-x-6 pb-3 sm:pr-12 md:pr-20">
            <button
              type="button"
              onClick={() => handleScrollIntoView(proBonoRef.current)}
              className="relative uppercase text-white group flex flex-col"
            >
              <div className="absolute top-0 -translate-y-2 group-hover:line-grow" />
              pro bono
            </button>
            <button
              type="button"
              onClick={() =>
                handleScrollIntoView(governanceRef.current)
              }
              className="relative uppercase text-white group flex flex-col"
            >
              <div className="absolute top-0 -translate-y-2 group-hover:line-grow" />
              The center (CLDG)
            </button>
          </div>
        </Header>
        <div className="relative bg-black cursor-default flex flex-col items-center justify-center min-h-[70vh] w-full">
          <Image
            src="/assets/images/foundation.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
            loading="lazy"
            // objectPosition="top"
            className="top-0 absolute z-0"
          />
          <div className="justify-end bg-gradient-to-t from-black to-white/25 top-0 h-full absolute flex flex-col items-center text-white w-full">
            <div className="text-3xl  text-white md:text-6xl font-bold tracking-wide w-full md:max-w-6xl flex flex-col border-b border-white pb-4">
              <h1 className="">The Certa</h1>
              <h1 className="">Foundation.</h1>
            </div>
          </div>
        </div>
        <div className="relative bg-black p-4 md:p-8 text-white w-full flex flex-col items-center">
          <div className="flex flex-col w-full max-w-6xl relative">
            {' '}
            <br /> <br /> <br />
            <FoundationArticle />
          </div>
          <div className="right-2 md:right-4 absolute flex flex-col items-center">
            <button
              type="button"
              onClick={() => handleScrollIntoView(proBonoRef.current)}
              className="group flex items-center relative"
            >
              <span className="whitespace-nowrap hidden group-hover:block -translate-x-20 absolute text-xs text-brand-yellow">
                PRO-BONO
              </span>
              <span className="w-3 h-3 rounded-full bg-white" />
            </button>
            <div className="h-16 w-0.5 bg-brand-yellow" />
            <button
              type="button"
              onClick={() =>
                handleScrollIntoView(governanceRef.current)
              }
              className="group flex items-center relative"
            >
              <span className="uppercase whitespace-nowrap hidden group-hover:block -translate-x-12 absolute text-xs text-brand-yellow">
                cldg
              </span>
              <span className="w-3 h-3 rounded-full bg-white" />
            </button>
            <div className="h-16 w-0.5 bg-brand-yellow" />
            <button className="group flex items-center relative">
              <span className="w-2 h-2 rounded-full bg-brand-yellow" />
            </button>
          </div>
        </div>

        <div
          ref={proBonoRef}
          className="relative bg-black cursor-default flex flex-col items-center justify-center min-h-[70vh] w-full"
        >
          <Image
            src="/assets/images/foundation.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
            loading="lazy"
            // objectPosition="top"
            className="top-0 absolute z-0"
          />
          <div className="justify-end bg-gradient-to-t from-black to-white/25 top-0 h-full absolute flex flex-col items-center text-white w-full">
            <div className="text-3xl text-white md:text-6xl font-bold tracking-wide w-full md:max-w-6xl flex flex-col border-b border-white pb-4">
              <h1 className="">Pro-Bono.</h1>
            </div>
          </div>
        </div>
        <div className="bg-black p-4 md:p-8 text-white w-full flex flex-col items-center">
          <div className="w-full flex flex-col max-w-6xl">
            <ProbonoArticle />
          </div>
        </div>

        <div
          ref={governanceRef}
          className="relative bg-black cursor-default flex flex-col items-center justify-center min-h-[70vh] w-full"
        >
          <Image
            src="/assets/images/cldg.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
            loading="lazy"
            // objectPosition="top"
            className="top-0 absolute z-0"
          />
          <div className="justify-end bg-gradient-to-t from-black to-white/25 top-0 h-full absolute flex flex-col items-center text-white w-full">
            <div className="text-3xl text-white md:text-6xl font-bold tracking-wide w-full md:max-w-6xl flex flex-col border-b border-white pb-4">
              <h1 className="">The Centre for Law &</h1>
              <h1 className="">Digital Governance.</h1>
            </div>
          </div>
        </div>
        <div className="bg-black p-4 md:p-8 text-white w-full flex flex-col items-center">
          <div className="w-full flex flex-col max-w-6xl">
            <DigitalGovernanceAritlce />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ProBrono;
