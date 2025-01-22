import Link from 'next/link';
import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const LandingFooter = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex flex-col items-center bg-brand-primary py-3 px-8 md:px-16 w-full">
      <div className="md:flex md:space-x-6 justify-between items-center w-full">
        <div className="flex items-center space-x-6 text-xs text-white">
          <Link href="/contact-us">
            <h6 className="cursor-pointer">CONTACT US</h6>
          </Link>
        </div>
        <div className="flex items-center space-x-6 text-xs text-gray-200">
          <h6>
            All rights reserved by certa Law | copyright {currentYear}
          </h6>
          <div className="flex items-center space-x-2">
            <TwitterIcon
              fontSize="small"
              className="cursor-pointer text-gray-200 hover:text-white"
              color="inherit"
            />
            <FacebookIcon
              fontSize="small"
              color="inherit"
              className="cursor-pointer text-gray-200 hover:text-white"
            />
            <LinkedInIcon
              fontSize="small"
              color="inherit"
              className="cursor-pointer text-gray-200 hover:text-white"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
