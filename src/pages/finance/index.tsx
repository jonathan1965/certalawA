import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import Image from 'next/image';
import Header from 'modules/_partials/Header';
import Footer from 'modules/_partials/Footer';

const BankingFinance: NextPage = () => {
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
              Banking & Finance
            </h1>
          </div>
        </div>
        <div className="bg-white p-4 md:px-8 py-8 md:py-12 flex flex-col items-center flex-grow w-full">
          <div className="w-full md:max-w-6xl flex flex-col">
            <article className="inline-grid md:grid-cols-3 gap-x-10 gap-y-5 mt-3 pb-4 md:pb-8 border-b border-primary">
              <div className="relative flex flex-col text-brand-yellow min-h-48 w-full">
                <Image
                  src="/assets/images/wp2128226.jpg"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  loading="lazy"
                  className="top-0 absolute z-0"
                />
              </div>
              <div className="flex flex-col md:col-span-2">
                <section>
                  Today&apos;s financial institutions and their
                  clients face uncountable challenges, including
                  restrictions on foreign banks, lending to companies
                  in certain jurisdictions, distressed debtand
                  increasing complexity of financial services
                  regulation across the globe.
                </section>
                <section>
                  <br />
                  Therefore, it is crucial that their lawyers can
                  navigate them through this complexenvironment. CL is
                  exceptionally wellpositioned to do this. At CL,
                  banking and finance lawPractice isamong the focal
                  areas of the law firm. Our banking and
                  financelawyers representbanks and other financial
                  institutions, wealso represent corporate borrowers
                  in structuringandexecuting the most complex
                  financings across industries.
                </section>
                <section>
                  <br />
                  Clients trust CL’s banking and finance lawyers
                  because of ourpractical, business-orientedapproach
                  to achieving theirobjectives.CERTA’s lawyers have
                  advanced understanding oftheexpectations and
                  requirements of both sides to a financingtransaction
                  and providecounsel tailored to each client’s needs.
                  <br /> <br />
                  The following represents just a small part of our
                  focus: <br />
                  • Syndicated loans <br />
                  • Cross-border financing <br />• Capital markets
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

export default BankingFinance;
