import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Header from 'modules/_partials/Header';

const Scaffold = ({ children }: any) => {
  const { pathname } = useRouter();
  return (
    <div className="relative h-screen flex w-full bg-cyan-200 overflow-y-auto overflow-x-hidden">
      <div className="hidden md:flex flex-col w-1/6 top-0 sticky pl-2">
        <Link href="/">
          <div className="py-1 px-4 cursor-pointer flex items-center space-x-1">
            <h1 className="text-2xl">Logo</h1>
          </div>
        </Link>
        <div className="flex w-full mt-6" />
        {[].map((element: any) => (
          <Link key={element.label} href={element.path}>
            <div
              className={
                pathname === element.path
                  ? 'cursor-pointer relative w-full py-1 ' +
                    "after:content-[''] after:rounded-tl-full after:top-0 after:right-0 after:absolute after:w-3 after:h-3 after:translate-x-1.5 after:bg-white " +
                    "before:content-[''] before:rounded-bl-full before:bottom-0 before:right-0 before:absolute before:w-3 before:h-3 before:translate-x-1.5 before:bg-white"
                  : 'cursor-pointer w-full py-1'
              }
            >
              <h2
                className={`py-2 px-4 w-full truncate ${
                  pathname === element.path
                    ? 'bg-white rounded-l-2xl'
                    : ''
                }`}
              >
                {element.label}
              </h2>
            </div>
          </Link>
        ))}
      </div>
      <div className="w-full flex flex-col md:w-5/6 h-full bg-white rounded-3xl">
        <header className="top-0 sticky z-20 bg-cyan-200 w-full pt-2 px-2 md:pl-0">
          <div className="px-4 md:pl-6 bg-white rounded-t-3xl flex flex-col items-center md:px-8 w-full">
            <Header />
          </div>
        </header>
        <div className="flex flex-col flex-grow bg-cyan-200 px-2 md:pl-0 pb-2">
          <div className="flex flex-col items-center md:pl-2 flex-grow bg-white rounded-b-3xl">
            <div className="w-full flex flex-col xl:max-w-7xl">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scaffold;
