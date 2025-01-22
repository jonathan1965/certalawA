import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import Image from 'next/image';
import Header from 'modules/_partials/Header';
import Footer from 'modules/_partials/Footer';

const RevenueTaxation: NextPage = () => {
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
              Revenue and Taxation
            </h1>
          </div>
        </div>
        <div className="bg-white p-4 md:px-8 py-8 md:py-12 flex flex-col items-center flex-grow w-full">
          <div className="w-full md:max-w-6xl flex flex-col">
            <article className="inline-grid md:grid-cols-3 gap-x-10 gap-y-5 mt-3 pb-4 md:pb-8 border-b border-primary">
              <div className="relative flex flex-col text-brand-yellow min-h-48 w-full">
                <Image
                  src="/assets/images/Tax.jpg"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  loading="lazy"
                  className="top-0 absolute z-0"
                />
              </div>
              <div className="flex flex-col md:col-span-2">
                <section>
                  Smart, effective tax planning is a crucial factor of
                  every successful business transaction. When tackling
                  critical tax issues, you need lawyers with the
                  experience to navigate the sea of complex,
                  constantly changing tax laws. Please consider CERTA.
                  CERTA’s tax practice has a superb reputation for tax
                  counseling on local and transnational tax issues and
                  transactions. CERTA’s tax practice provides its
                  clients with cutting-edge tax advice in domestic and
                  cross-border transactions. <br />
                  <br />
                  Our tax team also effectively representsclients in
                  tax disputes at every stage of the tax controversy
                  process, from pre-audit planningto administrative
                  appeals and post-appeals processes in
                  competentcourts. CERTA’s taxattorneys bring a wealth
                  of experience indealing with RRA and other taxing
                  authorities inorder to resolvedisputes effectively
                  and efficiently. Unlike accounting firms,
                  ourtaxlitigators can represent clients in all phases
                  of tax disputesand have successfully defendedclients
                  in some of the largest taxdisputes on record. <br />
                  <br />
                  Our unsurpassed understanding of the process enables
                  us tohelp clients design andimplement tax strategies
                  for theiroperations and transactions in Rwanda and
                  the region.
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

export default RevenueTaxation;
