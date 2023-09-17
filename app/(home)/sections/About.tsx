'use client';

import { motion } from 'framer-motion';

import { styles } from '@/lib/styles';
import { fadeIn, textVariant } from '@/lib/transitions';

import { Container } from '@/components/Container';

import { about } from '@/constants';
import SectionWrapper from '@/hoc/SectionWrapper';

const About = () => {
  return (
    <Container className='flex flex-col gap-y-4 h-screen sm:px-16 px-6 sm:py-16 py-6'>
      <h2 className='text-xl md:text-2xl lg:text-3xl text-teal-600'>ABOUT</h2>
      <p className='mt-4 text-secondary-2 text-[17px] max-w-3xl leading-[30px]'>
        {about}
      </p>
      <p className='mt-8 text-secondary-2 text-[17px] max-w-4xl leading-[30px]'>
        I am actively seeking opportunities in software development. Please
        reach out if hiring.
      </p>
    </Container>
  );
};

export default SectionWrapper(About, 'about');
