'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './hero.css';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

function Hero() {
  const [text, setText] = useState('');
  const phrases = [
    'INNOVATE 2.O HACK TO BUILD',
  ];

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
        await new Promise(resolve => setTimeout(resolve, 2000)); // Pause at the end
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
          className="flex justify-center items-center flex-col z-10 lg:mt-[70px] mt-[70px] mb-[60px]"
          id="heroPage"
        >
          <motion.h1
            variants={textVariant(1.5)}
            className={styles.heroHeading}
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
        </div>

        <div className="frontPageBtn flex space-x-4">
          <div
            className="apply-button"
            data-hackathon-slug="hackstreet24"
            data-button-theme="light"
            style={{ height: '44px', width: '312px' }}
          />
          <div
            class="apply-button"
            data-hackathon-slug="YOUR-HACKATHON-SLUG"
            data-button-theme="light"
            style={{height: '44px', width: '312px'}}
          ></div>

          <button className="Btn font-normal" type="button">
            <a href="https://discord.com/invite/zKFdRQ4z9D">Discord</a>
          </button>
          <button className="Btn font-normal" type="button">
            <a href="https://discord.com/invite/zKFdRQ4z9D">Devfolio Link</a>
          </button>
        </div>

        <motion.div
          variants={slideIn('right', 'tween', 0.1, 1.5)}
          className="relative w-full md:-mt-[-70px] -mt-[-20px]"
        >
          <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
          <img
            src="/gif3.gif"
            alt="cover"
            className="w-full sm:h-[500px] h-[500px] lg:h-[500px] object-cover rounded-tl-[140px] z-10 relative"
          />

          <a href="#explore">
            <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] lg:-mt-[50px] pr-[40px] relative z-[10]">
              <img
                src="/logo_hack.png"
                alt="stamp"
                className="sm:w-[155px] lg:w-[100px] w-[100px] sm:h-[155px] lg:h-[100px] h-[100px] object-contain"
              />
            </div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
