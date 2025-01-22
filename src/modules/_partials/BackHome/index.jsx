/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'next/link';

const BackHome = ({ label, inner }) => {
  return (
    <div className="flex items-center space-x-6 text-sm font-medium p-4 md:px-8">
      <Link to="/" className="text-brand-green">
        Home
      </Link>
      {inner &&
        inner.map((element) => (
          <div
            key={element.label}
            className="flex items-center space-x-6"
          >
            <i className="fa-solid fa-chevron-right text-brand-gray" />
            <Link to={element.to} className="text-brand-green">
              {element.label}
            </Link>
          </div>
        ))}
      <i className="fa-solid fa-chevron-right text-brand-gray" />
      <p className="text-brand-gray">{label}</p>
    </div>
  );
};

export default BackHome;
