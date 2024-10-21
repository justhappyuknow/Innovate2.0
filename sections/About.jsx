'use client';

import { motion } from 'framer-motion';
import { InsightCard, TitleText, TypingText } from '../components';


import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

function About() {
  return (
    <section className={`${styles.paddings} relative z-10`} id="about">
      <div className="gradient-02 z-0" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TitleText title="About INNOVATE 2.O" textStyles="text-center" className="my-5" />

        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
        >
          <span className="font-extrabold text-white">INNOVATE 2.O</span> is a HYBRID
           hackathon, being held on{' '}
          <span className="font-extrabold text-white">6 - 9 TH November 2k24.</span>{' '}
          This year, Innovate 2.0 returns with
          even more excitement,   .{' '}
                    <span className="font-extrabold text-white">inviting a
          larger community of innovators to
          build </span>
          on the tradition of turning
          groundbreaking ideas into real-world
          applications,{' '}
                    <span className="font-extrabold text-white">
                    reinforcing the
          hackathon’s mission to drive
          innovation and entrepreneurship
          </span>{' '}
          
        </motion.p>

        <motion.img
          variants={fadeIn('up', 'tween', 0.3, 1)}
          src="/arrow-down.svg"
          alt="arrow down"
          className="w-[18px] h-[28px] object-contain mt-[28px]"
        />
      </motion.div>
    </section>
  );
}

export default About;
