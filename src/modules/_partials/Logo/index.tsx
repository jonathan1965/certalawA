import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <div className="cursor-pointer py-3">
      <Link href="/">
        <Image
          src="/assets/images/logo1.png"
          alt="CERTA LAW"
          height="72"
          width="200"
          className="cursor-pointer"
        />
      </Link>
    </div>
  );
};

export default Logo;
