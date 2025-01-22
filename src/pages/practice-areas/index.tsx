import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Header from 'modules/_partials/Header';
import Footer from 'modules/_partials/Footer';
import PracticeItem from 'modules/_partials/PracticeItem';
import Static from 'system/static';
import PopupDrawer from 'modules/_partials/PopupDrawer';
import {
  Building,
  DollarSign,
  FileText,
  Gavel,
  Scale,
  Shield,
  Users,
  Briefcase,
  HandshakeIcon,
  BookOpen,
  Home,
  Globe,
  Heart,
  Car,
  Building2,
} from 'lucide-react';

const practiceAreas = [
  { title: 'Government Contracts', Icon: Building },
  { title: 'Banking & Finance', Icon: DollarSign },
  { title: 'Employment & Labour', Icon: Users },
  { title: 'Revenue & Taxation', Icon: FileText },
  { title: 'Intellectual Property', Icon: Shield },
  { title: 'Commercial Transactions', Icon: Briefcase },
  { title: 'Environmental Law', Icon: Scale },
  { title: 'Dispute Resolution', Icon: Gavel },
  { title: 'Civil Law', Icon: HandshakeIcon },
  { title: 'Education Law', Icon: BookOpen },
  { title: 'Real Estate Law', Icon: Home },
  { title: 'International Law', Icon: Globe },
  { title: 'Healthcare Law', Icon: Heart },
  { title: 'Transportation Law', Icon: Car },
  { title: 'Corporate Law', Icon: Building2 },
];
import PracticeAreaCard from './PracticeArea';

const PracticeAreas: NextPage = () => {
  const { push } = useRouter();
  return (
    <>
      <Head>
        <title>CERTA LAW</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col h-screen overflow-y-auto">
        <Header />
        <div className="flex flex-col flex-grow w-full">
          <div className="relative bg-primary p-4 md:p-8 cursor-default flex flex-col items-center justify-center  min-h-[40vh] w-full bg-bottom bg-no-repeat bg-cover">
            <Image
              src="/assets/images/insight.jpg"
              alt=""
              width={150}
              height={150}
              layout="fill"
              objectFit="cover"
              loading="lazy"
              className="top-0 absolute z-0"
            />
            <div className="top-0 mx-auto absolute h-full flex flex-col justify-center w-full md:max-w-6xl">
              <h1 className="text-2xl md:text-4xl font-semibold text-primary">
                Our Practice Areas
              </h1>
              <div className="hidden mt-3 flex-col items-start text-black italic">
                <h2>Holding your hand on every journey &</h2>
                <h2>Partnership you make.</h2>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 md:p-8 cursor-default flex flex-col items-center justify-center w-full">
            <div className="w-full md:max-w-6xl">
              <p>
                At Certa Law, our main focus is to cater for the
                critical business needs of our clients, along a range
                of major legal practices. Our collaborative approach
                shows that our clients have ready access to corporate,
                banking, transactional and intellectual attorneys
                whose knowledge and experience span industries and
                worldwide.
              </p>
              <div className="mt-4 h-[4] w-full opacity-25 bg-primary rounded" />
              {/* <div className="my-4 gap-3 grid sm:grid-cols-2 md:grid-cols-4">
                {Static.practiceItems.map(element => (
                  <PopupDrawer
                    key={element.otherTitle || element.title}
                    desc={element.html}
                    image={
                      element.image ||
                      element.background ||
                      '/assets/images/screen.png'
                    }
                    title={element.title}
                  >
                    <PracticeItem
                      icon={element.icon}
                      title={element.title}
                      background={
                        element.background ||
                        '/assets/images/screen.png'
                      }
                    />
                  </PopupDrawer>
                ))}
              </div>  */}
              <div className="container mx-auto  py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 place-items-center gap-4">
                  {Static.practiceItems.map(element => (
                    <PopupDrawer
                      key={element.otherTitle || element.title}
                      desc={element.html}
                      image={
                        element.image ||
                        element.background ||
                        '/assets/images/screen.png'
                      }
                      title={element.title}
                    >
                      <PracticeAreaCard
                        key={element.title}
                        title={element.title}
                        Icon={element.icon}
                      />
                    </PopupDrawer>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default PracticeAreas;
