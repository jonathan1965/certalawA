import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import Image from 'next/image';
import Header from 'modules/_partials/Header';
import Footer from 'modules/_partials/Footer';
import CarouselPartners from 'modules/_partials/CarouselPartners';

const ContactPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>CERTA LAW</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col h-screen overflow-y-auto">
        <Header />
        <div className="relative bg-primary  md:p-8 cursor-default flex flex-col items-center justify-center  min-h-[75vh] w-full bg-center bg-no-repeat bg-cover">
          <Image
            src="/assets/images/staff/lawfirm.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
            loading="lazy"
            objectPosition="top"
            className="top-0 absolute z-0"
          />
          <div className="flex flex-col h-full justify-center text-white w-full md:max-w-6xl">
            <h1 className="italic text-2xl text-white md:text-4xl font-bold">
              About Us.
            </h1>
            <h2 className="hidden mt-1 italic">
              Justice for everyone
            </h2>
          </div>
        </div>
        <div className="bg-white p-4 md:px-8 py-8 md:py-12 flex flex-col items-center w-full">
          <div className="w-full md:max-w-6xl inline-grid items-start md:grid-cols-3 gap-x-12 gap-y-5">
            <div className="flex flex-col md:col-span-2">
              <h1 className="text-xl md:text-2xl font-semibold pb-4">
                Certa Law Rwanda
              </h1>
              <p className="mt-2">
                Founded in 2014, the firm has claimed the top-ranking
                spot in the legal space as the fastest growing law
                firm in Rwanda. This extraordinary growth in operation
                and repute is explained and justified by the hard work
                of an experienced, interdisciplinary and
                multijurisdictional team at CERTA. <br />
                Our philosophy is to provide advice and representation
                that allows our clients to achieve their goals while
                minimizing legal risk. <br />
                Certa Law chamber (CL) seeks to establish itself as
                the preeminent law firm in Rwanda and the region with
                some of the oustanding Attorneys in Rwanda offering
                full, dedicated legal services to our clients whilst
                bringing depths of experience and breadth of coverage
                in the market.
                <br />
                Our attorneys possess multijurisdictional
                qualifications that position them as outstanding
                transactional lawyers as well as local advising
                counsel of choice. The founder, Florida KABASINGA,
                practiced law internationally for nearly a decade and
                places high value on skills, professionalism and
                enthusiasm. She brings an international approach to
                the practice of law in Rwanda <br /> <br />
              </p>
              <div className="flex group relative md:hidden flex-col min-h-[400px] md:max-w-sm">
                <Image
                  src="/assets/images/staff/Florida3.jpg"
                  alt="Florida Kabasinga"
                  layout="fill"
                  objectFit="cover"
                  loading="lazy"
                  // objectPosition="top"
                  className="top-0 absolute z-0"
                />

                <div className="w-full px-4 py-3 hidden left-0 bottom-0 absolute text-white bg-primary justify-center bg-opacity-80 group-hover:block">
                  <p className="font-semibold">Florida Kabasinga</p>
                  <p>Founder & Managing Partner</p>
                  <p>Certa Law</p>
                </div>
              </div>
              <div className="flex items-start flex-col">
                <p className="pl-3 text-sm translate-y-6">
                  Member of:
                </p>
                <img
                  src="/assets/images/lex.png"
                  className="h-24"
                  alt="lex africa"
                />
              </div>{' '}
              <br />
              <div className="flex flex-col md:col-span-2">
                <h1 className="text-xl md:text-xl font-semibold pb-4">
                  About Lex Africa
                </h1>
                <p className="mt-2 text-sm text-brand-gray">
                  LEX Africa is a legal network of leading law firms
                  in over 25 African countries and is Africa’s largest
                  legal alliance. Each member is an independent law
                  firm whose key specialist focus is on general
                  corporate and commercial law as well as litigation
                  and dispute resolution. Founded in 1993, LEX Africa
                  effectively covers the entire African continent and
                  provides a valuable resource for businessmen and
                  investors in Africa. LEX Africa has a more than 25
                  year track record of assisting and advising clients
                  on their African business activities. Each member is
                  a full service independent law firm with expert
                  knowledge and experience on both local laws and the
                  local business, political, cultural and economic
                  environment.For more information, visit:
                  www.lexafrica.com
                </p>
              </div>
            </div>
            <div className="hidden group relative md:flex flex-col min-h-[420px] md:max-w-sm top-14">
              <Image
                src="/assets/images/staff/Florida3.jpg"
                alt="Florida Kabasinga"
                layout="fill"
                objectFit="cover"
                loading="lazy"
                // objectPosition="top"
                className="top-0 absolute z-0"
              />

              <div className="w-full px-4 py-3 hidden left-0 bottom-0 absolute text-white bg-primary justify-center bg-opacity-80 group-hover:block">
                <p className="font-semibold">Florida Kabasinga</p>
                <p>Founder & Managing Partner</p>
                <p>Certa Law</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-200 p-4 md:px-8 py-8 md:py-12 flex flex-col items-center w-full">
          <div className="w-full md:max-w-6xl flex flex-col items-center">
            <p className="text-brand text-xl font-bold md:text-xl uppercase text-primary">
              Some of the clients we have worked with:
            </p>
            <CarouselPartners />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
