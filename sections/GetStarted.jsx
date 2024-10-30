'use client';

import { motion } from 'framer-motion';
import './timeline.css';
import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText } from '../components';
// import { startingFeatures } from '../constants';

function GetStarted() {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} flex lg:flex-col flex-col gap-8 m-auto`}
      >
        <TitleText title="Timeline" textStyles="text-center" />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={fadeIn('down', 'spring', 0.2, 1.5)}
      >
        <div className="timeline">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn('right', 'spring', 0.8, 1.5)}
          >
            <div className="container left">
              <img src="/stopwatch.jpeg" />
              <div className="text-box">
                <h2 className="heading1">REGISTRATIONS BEGINS</h2>
                <small>25<sup>th</sup> OCTOBER</small>
                <p>Deadline for Regsitrations <br/><small>7<sup>th</sup> NOVEMBER</small></p>
                <span className="left-arrow" />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn('left', 'spring', 0.9, 1.5)}
          >
            <div className="container right">
              <img src="/stopwatch.jpeg" />
              <div className="text-box">
                <h2 className="heading1">IDEA SUBMISSION ROUND</h2>
                <small>10<sup>th</sup> NOVEMBER, 2024</small>
                <p>9:00 AM - 7:00 PM</p>
                <p>Result of Idea Submission on <br/><small>11<sup>th</sup> NOVEMBER</small></p>
                <span className="right-arrow" />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn('right', 'spring', 1, 1.5)}
          >
            <div className="container left">
              <img src="/stopwatch.jpeg" />
              <div className="text-box">
                <h2 className="heading1">HACKATHON STARTS</h2>
                <small>12<sup>th</sup>  NOVEMBER, 2024</small>
                <p>09:00 AM onwards</p>
                <span className="left-arrow" />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn('left', 'spring', 1.1, 1.5)}
          >
            <div className="container right">
              <img src="/stopwatch.jpeg" />
              <div className="text-box">
                <h2 className="heading1">HACKATHON ENDS</h2>
                <small>13<sup>th</sup>  NOVEMBER, 2024</small>
                <p>9:00 AM</p>
                <span className="right-arrow" />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn('right', 'spring', 1.2, 1.5)}
          >
            <div className="container left">
              <img src="/stopwatch.jpeg" />
              <div className="text-box">
                <h2 className="heading1">OFFLINE WINNER DECLARATION</h2>
                <p>After Project Presentation by team</p>
                <small>16<sup>th</sup>  NOVEMBER, 2024</small>
                <p>9:00 AM ONWARDS</p>
                <span className="left-arrow" />
              </div>
            </div>
          </motion.div>
          {/* <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn('left', 'spring', 1.2, 1.5)}
          >
            <div className="container right">
              <img src="/two.jpg" />
              <div className="text-box">
                <h2 className="heading1">PROJECT EVALUATION</h2>
                <small>8TH FEBRUARY, 2024</small>
                <p>11:30 PM onwards</p>
                <span className="right-arrow" />
              </div>
            </div>
            <div className="container left">
              <img src="/stopwatch.jpeg" />
              <div className="text-box">
                <h2 className="heading1">FINAL PRESENTATION</h2>
                <small>9TH NOVEMBER, 2024</small>
                <p>10:00 AM </p>
                <span className="left-arrow" />
              </div>
            </div>
          </motion.div> */}
          
          
        </div>
      </motion.div>
    </section>
  );
}

export default GetStarted;
