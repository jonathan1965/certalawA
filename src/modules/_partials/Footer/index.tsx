import Link from 'next/link';
import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <footer className="mt-auto text-xs bg-brand-black text-white flex flex-col items-center px-4 md:px-8 py-8 md:py-12 w-full">
      <div className="w-full md:max-w-6xl grid md:grid-cols-5 gap-x-10 gap-y-5">
        <div className="flex flex-col items-start">
          <Link href="/">
            <img
              src="/assets/images/logo.png"
              alt="CERTA LAW"
              className="h-12 md:h-16 py-2 cursor-pointer"
            />
          </Link>
          <p className="mt-3 text-xs">
          CERTA Law Chambers (CL)is a full-service law firm
                providing a spectrum of legal services, notably,
                Corporate and Commercial Transactions, Dispute
                Resolution (litigation and ADR), Employment and
                Labour, Banking and Finance, Corporate Governance,
                Revenue and Taxation, Government Contracts,
                Intellectual Property, Environmental & Energy Law, pro
                bono, among others.
          </p>
          <p className="mt-6 text-brand-yellow">
            All rights reserved. Copyright {new Date().getFullYear()}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-sm md:text-lg font-semibold uppercase">
            Quick links:
          </p>
          <div className="flex flex-col items-start space-y-1 mt-4">
            <Link href="/about-2">About Certa Law</Link>
            <Link href="/practice-areas">Practice Areas</Link>
            <Link href="/people">People</Link>
            <Link href="/contact-us">Contact</Link>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-sm md:text-lg font-semibold uppercase">
            Department links:
          </p>
          <div className="text-xs flex flex-col items-start space-y-1 mt-4">
            <p>Front desk</p>
            <p>hello@certalaw.rw</p> <br />
            <p>Legal Services & Consultations</p>
            <p>legal@certalaw.rw</p> <br />
            <p>The Certa Law Foundation</p>
            <p>foundation@certalaw.rw</p>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-sm md:text-lg font-semibold uppercase">
            Office links:
          </p>
          <div className="text-xs flex flex-col items-start space-y-1 mt-4">
            <p>KN 4 Avenue, Kigali <br/>
            1st Floor, ECD Plaza </p>
            <p>P.O.Box 7354</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="inline-grid gap-x-3 gap-y-2 grid-cols-2">
            <a
              href="https://twitter.com/certa_law"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon fontSize="large" />
            </a>
            <a
            href="https://www.linkedin.com/company/certa-law/about-2/"
              target="_blank"
              rel="noopener noreferrer">
            <LinkedInIcon fontSize="large" />
            </a>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
