import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import Image from 'next/image';
import Header from 'modules/_partials/Header';
import Footer from 'modules/_partials/Footer';

const IntellectualProperty: NextPage = () => {
  return (
    <>
      <Head>
        <title>CERTA LAW</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col h-screen overflow-y-auto">
        <Header />
        <div className="relative bg-primary p-4 md:p-8 cursor-default flex flex-col items-center justify-center  min-h-[40vh] w-full bg-center bg-no-repeat bg-cover">
          <Image
            src="/assets/images/finance.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
            loading="lazy"
            className="top-0 absolute z-0"
          />
          <div className="flex flex-col justify-center h-full top-0 absolute z-10 w-full md:max-w-6xl">
            <h1 className="text-2xl text-white md:text-4xl font-bold">
              Corporate Law
            </h1>
          </div>
        </div>
        <div className="bg-white p-4 md:px-8 py-8 md:py-12 flex flex-col items-center flex-grow w-full">
          <div className="w-full md:max-w-6xl flex flex-col">
            <article className="inline-grid md:grid-cols-3 gap-x-10 gap-y-5 mt-3 pb-4 md:pb-8 border-b border-primary">
              <div className="relative flex flex-col text-brand-yellow min-h-48 w-full">
                <Image
                  src="/assets/images/corporatelaw.jpg"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  loading="lazy"
                  className="top-0 absolute z-0"
                />
              </div>
              <div className="flex flex-col md:col-span-2">
                <section>
                  Corporate governance requires balancing complicated
                  competing interests under the intense spotlight of
                  regulatory, operational, fiduciary, political,
                  communications and market factors. It requires the
                  application of judgment, legal analysis, and
                  practical decision-making in a real-time environment
                  where decisions are likely to be second-guessed and
                  sometimes reviewed by the courts.
                  <br />
                  <br />
                  At CERTA, we understand that the best way to avoid a
                  corporate governance crisis is to plan for it; and
                  that often the most successfully resolved crises are
                  the ones that no one hears about. But when an issue
                  is in the spotlight, we bring to bear an
                  unparalleled array of resources and expertise,
                  including regulation, disclosure, corporate law,
                  communications policy, compliance practices,
                  privacy, fiduciary duties, investor relations and
                  experience based business judgment. <br /> <br />
                  We are experienced in guiding boards of directors,
                  special committees, and management on the full range
                  of governance issues that confront them. In fact,
                  our multidisciplinary, business-focused approach to
                  addressing these issues has been relied upon by many
                  local and regional companies.
                </section>

                <p className="mt-4 text-primary">
                  Get more information by reaching out to us via email
                  info@certalaw.rw
                </p>
              </div>
            </article>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default IntellectualProperty;
