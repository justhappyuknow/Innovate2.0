'use client';

import { Link } from 'react-scroll';
import React, { useState } from 'react';
import Image from 'next/image';

function Navbar() {
  const [status, setStatus] = useState(false);
  const handleNavClick = () => {
    setStatus(!status);
  };

  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-50 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center justify-evenly">
            <Image src="/Logo-jiit[1].png" alt="Logo" width={60} height={60} />
            <Image src="/1.png" alt="Logo" width={50} height={50} className="ml-3" />
            <h2 className="text-lg font-bold ml-3 text-white lg:text-2xl">
              <Link to="home" className="cursor-pointer">INNOVATE 2.0</Link>
            </h2>
          </div>

          {/* Navbar Links for Desktop */}
          <div className="hidden md:flex space-x-8">
            <Link to="home" className="navParts cursor-pointer text-white hover:text-blue-600">Home</Link>
            <Link to="about" className="navParts cursor-pointer text-white hover:text-blue-600">About</Link>
            <Link to="prize" className="navParts cursor-pointer text-white hover:text-blue-600">Prizes</Link>
            <Link to="faq" className="navParts cursor-pointer text-white hover:text-blue-600">FAQs</Link>
            <Image src="/JYC.png" alt="Logo" width={50} height={50} />
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="flex md:hidden">
            <button type="button" onClick={handleNavClick} className="text-gray-300 focus:outline-none">
              <img id="menuImg" src="/menuBtn.png" alt="Menu" className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${status ? 'block' : 'hidden'} md:hidden absolute top-16 left-0 right-0 bg-gray-900 bg-opacity-75 text-white z-50`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <button type="button" onClick={handleNavClick} className="flex justify-end p-2">
            <img src="/whiteCross.png" alt="Close Menu" className="w-6 h-6" />
          </button>
          <Link to="home" className="block px-3 py-2 rounded-md text-base font-medium cursor-pointer">Home</Link>
          <Link to="about" className="block px-3 py-2 rounded-md text-base font-medium cursor-pointer">About</Link>
          <Link to="prize" className="block px-3 py-2 rounded-md text-base font-medium cursor-pointer">Prizes</Link>
          <Link to="faq" className="block px-3 py-2 rounded-md text-base font-medium cursor-pointer">FAQs</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
