import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import Image from 'next/image';
import Header from 'modules/_partials/Header';
import Footer from 'modules/_partials/Footer';
import BioPopup from 'modules/_partials/BioPopup';
import Static from 'system/static';
import ExpandableText from 'pages/people/ExpandableText';

interface ExpandableTextProps {
  text: string;
  maxLength?: number;
}



const ContactPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>CERTA LAW</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col h-screen overflow-y-auto">
        <Header />
        <div className="relative bg-primary p-4 md:p-8 cursor-default flex flex-col items-center justify-center  min-h-[60vh] w-full bg-top bg-no-repeat bg-cover">
          <Image
            src="/assets/images/staff/LawFirm1.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
            loading="lazy"
            objectPosition="top"
            className="top-0 absolute z-0"
          />
          <div className="hidden text-white w-full md:max-w-6xl">
            <h1 className="italic text-2xl text-white md:text-4xl font-bold">
              About Us.
            </h1>
            <h2 className="hidden mt-1 italic">
              Justice for everyone
            </h2>
          </div>
        </div>

        <div className="bg-white p-4 md:px-8 py-8 md:py-12 flex flex-col items-center w-full">
          <div className="w-full md:max-w-6xl flex flex-col">
            <p>
              Our lawyers have the depth of experience and breadth of
              coverage the market needs. Our legal team is focused on
              meeting your business needs, responding to your concerns
              and finding the best solutions to your business
              challenges. CERTA brings together top tier talents with
              industries knowledge and substantive legal expertise.
            </p>
            <h1 className="mt-6 italic landingTexts text-2xl violetColor md:text-4xl">
              Meet Our Team
            </h1>
            <div className="w-full h-[1px] bg-primary bg-opacity-25 mt-2" />
            <div className="mt-6 inline-grid sm:grid-cols-2 md:grid-cols-4 gap-3">
              {Static.team.map(element => (
                <div key={element.title} className="flex flex-col">
                  <div className="group relative flex flex-col">
                    <Image
                      src={element.image}
                      height="900px"
                      width={500}
                      className="h-64 object-cover"
                      alt={element.firstName}
                    />
                    <div className="bg-primary bg-opacity-80 h-full w-full top-0 absolute hidden group-hover:flex flex-col items-center justify-center">
                      <BioPopup
                        firstName={element.firstName}
                        lastName={element.lastName}
                        desc={element.desc}
                        image={element.image}
                        title={element.title}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col mt-0.5">
                    <div className="w-full h-[1px] bg-primary bg-opacity-25" />
                    <p className="my-1">
                      <span className="font-bold">
                        {element.firstName}
                      </span>{' '}
                      {element.lastName}
                    </p>
                    <p className="text-brand-gray text-sm">
                      {element.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
