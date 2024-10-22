'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './hero.css';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';


function Hero() {
  const [text, setText] = useState('');
  const [text2, setText2] = useState('');
  const phrases = ['INNOVATE 2.0'];
  const phrases2 = ['Hack to Build', 'Presented By JIIT-128'];

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // First text animation for "INNOVATE 2.0"
  useEffect(() => {
    let currentPhraseIndex = 0;
    let currentLetterIndex = 0;
    let isDeleting = false;

    const animateText = async () => {
      const currentPhrase = phrases[currentPhraseIndex];

      if (!isDeleting && currentLetterIndex <= currentPhrase.length) {
        setText(currentPhrase.slice(0, currentLetterIndex));
        currentLetterIndex++;
      } else if (isDeleting && currentLetterIndex >= 0) {
        setText(currentPhrase.slice(0, currentLetterIndex));
        currentLetterIndex--;
      }

      if (currentLetterIndex === currentPhrase.length + 1) {
        await new Promise(resolve => setTimeout(resolve, 2000));
        isDeleting = true;
      }

      if (currentLetterIndex === 0 && isDeleting) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
      }

      const timeout = isDeleting ? 50 : 100;
      setTimeout(animateText, timeout);
    };

    animateText();
  }, []);

  useEffect(() => {
    let currentPhraseIndex = 0;
    let currentLetterIndex = 0;
    let isDeleting = false;

    const animateText2 = async () => {
      const currentPhrase = phrases2[currentPhraseIndex];

      if (!isDeleting && currentLetterIndex <= currentPhrase.length) {
        setText2(currentPhrase.slice(0, currentLetterIndex));
        currentLetterIndex++;
      } else if (isDeleting && currentLetterIndex >= 0) {
        setText2(currentPhrase.slice(0, currentLetterIndex));
        currentLetterIndex--;
      }

      if (currentLetterIndex === currentPhrase.length + 1) {
        await new Promise(resolve => setTimeout(resolve, 2000));
        isDeleting = true;
      }

      if (currentLetterIndex === 0 && isDeleting) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases2.length;
      }

      const timeout = isDeleting ? 50 : 100;
      setTimeout(animateText2, timeout);
    };

    animateText2();
  }, []);

  return (
    <section className={`${styles.yPaddings} flex justify-center`} id="home">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div
          className="flex justify-start items-center flex-col z-10 w-full lg:mt-[70px] mt-[40px] mb-[60px] px-4 lg:px-0"
          id="heroPage"
        >
          <motion.h1
            variants={textVariant(1.5)}
            className={`${styles.heroHeading} w-full text-left`}
            id="head"
          >
            {text}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.7 }}
              style={{ marginLeft: '0.1em' }}
            >
              |
            </motion.span>
          </motion.h1>

          {/* Second text for HACK TO BUILD */}
          <motion.h2
            variants={textVariant(1.5)}
            className={`${styles.heroHeading1} w-full text-left`}
            id="head"
          >
            {text2}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.7 }}
              style={{ marginLeft: '0.1em' }}
            >
              |
            </motion.span>
          </motion.h2>
        </div>

        <div className="frontPageBtn flex space-x-4">
          <button className="Btn font-normal" type="button">
            <a href="https://discord.com/invite/zKFdRQ4z9D">Discord</a>
          </button>
          <div
            className="apply-button"
            data-hackathon-slug="innovate-26"
            data-button-theme="light"
            style={{ height: '44px', width: '312px' }}
          ></div>
        </div>

        <motion.div
          variants={slideIn('right', 'tween', 0.1, 1.5)}
          className="relative w-full md:-mt-[-70px] -mt-[-20px]"
        >
          <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
          <img
            src="/gif4.gif"
            alt="cover"
            className="w-full sm:h-[500px] h-[500px] lg:h-[500px] object-cover rounded-tl-[140px] z-10 relative"
          />

          <a href="#explore">
            <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] lg:-mt-[50px] pr-[40px] relative z-[10]">
              <img
                src="/1.png"
                alt="stamp"
                className="sm:w-[155px] lg:w-[100px] w-[100px] sm:h-[155px] lg:h-[100px] h-[100px] object-contain rounded-full"
              />
            </div>
          </a>
        </motion.div>

        <div className="flex flex-col lg:flex-row justify-center w-full items-center gap-10 mt-8">
          <a href="https://devfolio.co" target="_blank">
            <img src="/Devfolio_Logo.svg" alt="DEVFOLIO LOGO" className="bg-white p-2 w-64"></img>
          </a>
          <a href="https://polygon.technology/" target="_blank">
            <img src="/Polygon_Logo.svg" alt="POLYGON LOGO" className="bg-white p-2 w-64"></img>
          </a>
          <a href="https://ethindia.co" target="_blank">
            <img src="/ethindia-dark.svg" alt="ETHINDIA LOGO" className="bg-white p-2 w-64"></img>
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
