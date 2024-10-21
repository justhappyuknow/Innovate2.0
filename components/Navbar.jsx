'use client';

import { Link } from 'react-scroll';
import React, { useState } from 'react';
import './Navbar.css';
import Image from 'next/image';

function Navbar() {
  const [status, setStatus] = useState(false);
  const handleNavClick = () => {
    setStatus(!status);
  };

  return (
    <div className="nav">
      <div className="heading flex gap-6">
        <Image src="/Logo-jiit[1].png" alt="Logo" width={60} height={60} />
        <Image src="/1.png" alt="Logo" width={50} height={50} />
        <h2>
          <Link className="navParts" to="home">INNOVATE 2.0</Link>
        </h2>
      </div>
      <div className="NavBar-desc">
        <Link className="navParts" to="home">Home</Link>
        <Link className="navParts" to="about">About</Link>
        <Link className="navParts" to="prize">Prizes</Link>
        <Link className="navParts" to="faq">FAQs</Link>
        {/* <Link className="navParts" to="sponser">Partners</Link> */}
        <Image src="/JYC.png" alt="Logo" width={50} height={50} />
      </div>

      <button type="button" onClick={handleNavClick} className="menuButton">
        <img id="menuImg" src="/menuBtn.png" alt="Menu" />
      </button>

      <div style={{ display: status ? 'block' : 'none' }} className="NavBar-description">
        <button type="button" onClick={handleNavClick} className="crossImg">
          <img src="/whiteCross.png" alt="Close Menu" />
        </button>

        <Link className="navParts" to="home">Home</Link><br />
        <Link className="navParts" to="about">About</Link><br />
        <Link className="navParts" to="prize">Prize</Link><br />
        <Link className="navParts" to="faq">FAQs</Link><br />
        {/* <Link className="navParts" to="sponser">Partners</Link> */}
      </div>
    </div>
  );
}

export default Navbar;