import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import Image from 'next/image';
import Header from 'modules/_partials/Header';
import Footer from 'modules/_partials/Footer';
import BackHome from 'modules/_partials/BackHome';

const EnvironmentalEnergy: NextPage = () => {
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
              Dispute Resolution
            </h1>
          </div>
        </div>
        
        <div className="bg-white p-4 md:px-8 py-8 md:py-12 flex flex-col items-center flex-grow w-full">
          <div className="w-full md:max-w-6xl flex flex-col">
            <article className="inline-grid md:grid-cols-3 gap-x-10 gap-y-5 mt-3 pb-4 md:pb-8 border-b border-primary">
              <div className="relative flex flex-col text-brand-yellow min-h-48 w-full">
                <Image
                  src="/assets/images/Dispute.jpg"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  loading="lazy"
                  className="top-0 absolute z-0"
                />
              </div>
              <div className="flex flex-col md:col-span-2">
                <section>
                The Firm is known for its reputable experience in effectively handling a wide range 
                of disputes on behalf of its clients, both local and international. These range from 
                constitutional matters, criminal matters, employment and labor, contracts, intellectual 
                property, taxation disputes among others. 
                  <br />
                  <br />
                  We have a full-fledged practice in litigation with a high calibre team which is equipped 
                  with decades of experience. We provide advisory services to our clients to ensure that 
                  disputes are avoided whenever possible, and resolved efficiently when they arise.
                  <br/>
                  <br/>
                  The Firm is also renowned for its charismatic engagement in strategic litigation and constitutional challenges. 
                  CERTA Law has both filed a number of constitutional challenges which have resulted in amendments of laws, as well 
                  as strategic litigation cases which have resulted in key jurisprudence. <br/> <br/>
                  Our highly experienced team represents both international and international arbitrations and our Partners sit on the 
                  domestic panel of arbitrators at the Kigali International Arbitration Centre. We also handle cases and advise clients in 
                  negotiations and mediation proceedings as well adjudication, an emerging area of settlement of construction disputes in Rwanda. <br/> <br/>
                  All our Partners act as court appointed mediators and Florida Kabasinga, our Managing Partner has been appointed as the 
                  Chairperson of the East African Law Society’s Alternative Dispute Resolution Committee. <br/>

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

export default EnvironmentalEnergy;
