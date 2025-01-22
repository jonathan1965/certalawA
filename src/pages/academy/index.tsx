import React from 'react';
import Head from 'next/head';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { NextPage } from 'next';
import Header from 'modules/_partials/Header';
import Footer from 'modules/_partials/Footer';

const Academy: NextPage = () => {
  return (
    <>
      <Head>
        <title>CERTA LAW</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col h-screen overflow-y-auto">
        <Header />
        <div className="bg-primary p-4 md:p-8 cursor-default flex flex-col items-center justify-center  min-h-[40vh] w-full bg-center bg-no-repeat bg-cover bg-[url(/assets/images/slide2.png)]">
          <div className="text-white w-full md:max-w-6xl">
            <h1 className="text-2xl text-white md:text-4xl font-bold">
              CLTP Academy
            </h1>
            <h2 className="mt-1 italic">
              Showing the next Lega solution
            </h2>
            <h2 className="italic">Providers</h2>
          </div>
        </div>
        <div className="bg-white p-4 md:px-8 py-8 md:py-12 flex flex-col items-center flex-grow w-full">
          <div className="w-full md:max-w-6xl flex flex-col">
            <h1 className="text-xl md:text-2xl pb-4">
              The Critical legal training programme (CLTP) Academy
            </h1>
            <article className="inline-grid sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-5 mt-3">
              <section className="flex flex-col">
                Vestibulum orci felis, rutrum vel pulvinar et, rhoncus
                in nulla. Phasellus at venenatis arcu, commodo
                tincidunt lorem. Fusce ultrices maximus libero, et
                ullamcorper velit eleifend id. Sed cursus, ex quis
                pulvinar hendrerit, lacus orci vehicula nunc, nec
                eleifend felis purus a lorem. Vivamus at nibh massa.
                Cras quis vehicula erat. Suspendisse potenti. Morbi
                ullamcorper leo vitae tempor ultricies. Donec at
                mauris auctor, tempus nisi eu, pharetra eros. In
                posuere a felis sit amet euismod. Nunc mattis ex id
                dolor semper, vitae efficitur mauris molestie. Mauris
                quis viverra felis, quis finibus enim. In pharetra
                iaculis dapibus. Sed tempor sem eget mattis bibendum.
              </section>
              <section>
                Vestibulum orci felis, rutrum vel pulvinar et, rhoncus
                in nulla. Phasellus at venenatis arcu, commodo
                tincidunt lorem. Fusce ultrices maximus libero, et
                ullamcorper velit eleifend id. Sed cursus, ex quis
                pulvinar hendrerit, lacus orci vehicula nunc, nec
                eleifend felis purus a lorem. Vivamus at nibh massa.
                Cras quis vehicula erat. Suspendisse potenti. Morbi
                ullamcorper leo vitae tempor ultricies. Donec at
                mauris auctor, tempus nisi eu, pharetra eros. In
                posuere a felis sit amet euismod. Nunc mattis ex id
                dolor semper, vitae efficitur mauris molestie. Mauris
                quis viverra felis, quis finibus enim. In pharetra
                iaculis dapibus. Sed tempor sem eget mattis bibendum.
              </section>
              <section>
                Vestibulum orci felis, rutrum vel pulvinar et, rhoncus
                in nulla. Phasellus at venenatis arcu, commodo
                tincidunt lorem. Fusce ultrices maximus libero, et
                ullamcorper velit eleifend id. Sed cursus, ex quis
                pulvinar hendrerit, lacus orci vehicula nunc, nec
                eleifend felis purus a lorem. Vivamus at nibh massa.
                Cras quis vehicula erat. Suspendisse potenti. Morbi
                ullamcorper leo vitae tempor ultricies.
              </section>
            </article>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Academy;
