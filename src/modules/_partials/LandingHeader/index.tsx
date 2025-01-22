import Link from 'next/link';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image';
import Static from 'system/static';
import LeftDrawer from '../LeftDrawer';
import Logo from '../Logo';

const Header = () => {
  return (
    <header className="top-0 sticky z-20 flex flex-col items-center bg-primary px-8 md:px-16 w-full">
      <nav className="flex space-x-6 justify-between items-center w-full">
        <Logo />
        <h6 className="text-sm tracking-[1rem] text-white opacity-50 uppercase hidden sm:block">
          Attorneys at law
        </h6>
        <div className="flex items-center space-x-3">
          <button type="button" className="text-white">
            <SearchIcon fontSize="large" />
          </button>
          <div className="flex landingTexts items-center">
            <LeftDrawer navs={Static.navs} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
