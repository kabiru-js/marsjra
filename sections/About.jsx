'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Metaversus" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Faith and Exploration:

</span> Throughout history, religious faith and scientific exploration have often intertwined. Many religious communities have sought to reconcile their beliefs with the pursuit of knowledge and discovery. Islam, with its emphasis on seeking knowledge, stewardship of the Earth, and the unity of humankind, offers a rich foundation upon which to contemplate the challenges and opportunities of colonizing another celestial body.{' '}
        <span className="font-extrabold text-white">
        Advancements in space technology and exploration have always been met with a sense of wonder and awe. 
        </span>{' '}
        of today, using only{' '}
        <span className="font-extrabold text-white">Technology and Progress</span> The Hijra to Mars concept encourages Muslims to embrace science and technological progress while remaining true to the core principles of their faith. It envisions a future where Islamic scholars, scientists, engineers, and thinkers actively participate in the exploration and settlement of Mars, contributing their unique perspectives and intellectual wealth to humanity's shared journey into the cosmos{' '}
        <span className="font-extrabold text-white">explore</span> the spiritual Exploration
        of the mars by scrolling down
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

export default About;
