import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const InsightItem = () => {
  const { push } = useRouter();
  return (
    <div className="group relative flex flex-col min-h-[70px]">
      <div className="w-full h-48">
        <Image
          src="/assets/images/building.jpg"
          alt=""
          layout="fill"
          objectFit="cover"
          loading="lazy"
          className="top-0 absolute z-0"
        />
         <h2 className="text-black"> Hii </h2>
      </div>
      <div className="bg-white flex items-start flex-col py-3 px-2">
        <h1 className="text-lg font-bold">Insight:</h1>
        <p className="text-base">
        ADJUDICATION: RWANDA’S DELAYED POTENTIAL IN CONSTRUCTION DISPUTES
        </p>
        <button
          type="button"
          onClick={() => {
            push('/insights/1');
          }}
          className="mt-4 text-sm font-semibold"
        >
          Read more.
        </button>
      </div>
      <div className="peer hidden top-0 left-0 bottom-0 min-h-full w-full absolute group-hover:flex bg-white items-start flex-col py-3 px-2">
        <h1 className="text-lg font-bold">Insight:</h1>
        <p className="text-base">
        ADJUDICATION: RWANDA’S DELAYED POTENTIAL IN CONSTRUCTION DISPUTES
        </p>
        <p className=" mt-4 text-sm">
        Disputes in contracts are an inevitability that cannot be avoided. The construction industry is no exception
to the susceptibility to disputes, and its very distinctive nature, in particular, poses a legal question about
how to best handle such disputes in a timely manner that maintains a consistent cashflow.
        </p>
        <button
          type="button"
          onClick={() => {
            push('/insights/1');
          }}
          className="mt-4 text-sm font-semibold"
        >
          Read more.
        </button>
      </div>
    </div>
  );
};

export default InsightItem;
