import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import Image from 'next/image';
import Header from 'modules/_partials/Header';
import Footer from 'modules/_partials/Footer';

const LegalConsultancy: NextPage = () => {
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
              Legal Consultancy & Policy Analysis
            </h1>
          </div>
        </div>
        <div className="bg-white p-4 md:px-8 py-8 md:py-12 flex flex-col items-center flex-grow w-full">
          <div className="w-full md:max-w-6xl flex flex-col">
            <article className="inline-grid md:grid-cols-3 gap-x-10 gap-y-5 mt-3 pb-4 md:pb-8 border-b border-primary">
              <div className="relative flex flex-col text-brand-yellow min-h-48 w-full">
                <Image
                  src="/assets/images/commercial.jpg"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  loading="lazy"
                  className="top-0 absolute z-0"
                />
              </div>
              <div className="flex flex-col md:col-span-2">
                <section>
                At CERTA we offer a diverse legal consultation service to companies and institutions 
                in Rwanda and abroad. We identify, prevent, and solve legal issues at the earliest stage
                 of dealings. Our number one priority is to empower our client with knowledge resources 
                 that are required of them to make financially sensible decisions and comply with the 
                 laws of Rwanda.

                Our consultancy package includes offering industry-based workshops, seminars and trainings 
                in matters related to legal business ethics, anti-corruption, labour relations and general 
                good conduct in various sectors.

                We prepare legal opinions, policy analysis, and white papers to our clients covering 
                areas of their interest. We go beyond and above to guide our clients in how to utilise 
                such informational documents. <br/>

                We also offer specialised policy drafting and analysis services. Many companies and 
                organisations need personnel policies such as code of conduct, disciplinary action 
                policies, safety policies, privacy and confidentiality related policies. We are down 
                all your specific needs for your company. We also analyse the already existing policies 
                to align them to the laws and trends of the time.


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

export default LegalConsultancy;
