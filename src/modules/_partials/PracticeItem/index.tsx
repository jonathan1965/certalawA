import React from 'react';
import Image from 'next/image';

const PracticeItem = ({
  icon,
  title,
  background = '/assets/images/screen.png',
}) => {
  return (
    <div className="relative group flex flex-col">
      <Image
        src={background}
        alt=""
        height={250}
        width={250}
        className="flex-grow"
      />
      <div className="top-0 left-0 absolute bg-primary w-full h-full justify-center min-h-[250px] bg-opacity-80 flex flex-col items-center">
        <div className="hidden text-white group-hover:block">
          <Image src={icon} alt="" width={100} height={100} />
        </div>
        <p className="px-2 h2 text-white font-black text-lg md:text-xl text-center">
          {title}
        </p>
      </div>
    </div>
  );
};

export default PracticeItem;
