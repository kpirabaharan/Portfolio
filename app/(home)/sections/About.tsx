'use client';

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { about } from '@/constants';
import SectionWrapper from '@/hoc/SectionWrapper';

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      initial='hidden'
      ref={ref}
      animate={controls}
      className='h-screen mx-auto max-w-7xl w-full sm:px-16 px-6 sm:py-16 py-6'
    >
      <motion.h2
        className='text-xl md:text-2xl lg:text-3xl text-teal-600'
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
      >
        ABOUT
      </motion.h2>
      <motion.p
        className='mt-4 text-secondary-2 text-[17px] max-w-3xl leading-[30px]'
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
      >
        {about}
      </motion.p>
      <p className='mt-8 text-secondary-2 text-[17px] max-w-4xl leading-[30px]'>
        I am actively seeking opportunities in software development. Please
        reach out if hiring.
      </p>
    </motion.div>
  );
};

export default SectionWrapper(About, 'about');
