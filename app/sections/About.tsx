'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import SectionWrapper from '@/hoc/SectionWrapper';
import { fadeIn, textVariant } from '@/lib/transitions';
import { styles } from '@/lib/styles';

import { me } from '@/assets';

const About = () => {
  return (
    <>
      <motion.h2
        variants={textVariant()}
        className={`${styles.sectionHead} uppercase`}
      >
        About Me
      </motion.h2>
      <div className='mt-8 flex w-full flex-col-reverse gap-y-8 md:flex-row'>
        <div className='flex-[4] space-y-8 xl:flex-[3]'>
          <motion.p
            variants={fadeIn('', '', 0.1, 1)}
            className='max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg
            md:text-xl'
          >
            I&apos;m{' '}
            <span className='font-bold text-primary'>
              Keeshigan Pirabaharan,{' '}
            </span>
            a 24-year-old{' '}
            <span className='font-bold text-primary'>
              Mechatronics/Software Engineer
            </span>{' '}
            with a track record of crafting{' '}
            <span className='font-bold text-primary'>innovative</span> solutions
            that seamlessly blend Frontend and Backend technologies. I possess a
            strong aptitude for{' '}
            <span className='font-bold text-primary'>rapid learning</span> and a
            genuine enthusiasm for adopting{' '}
            <span className='font-bold text-primary'>new technologies</span> to
            engineer efficient and{' '}
            <span className='font-bold text-primary'>scalable solutions</span>{' '}
            that address real-world challenges.
          </motion.p>
          <motion.p
            variants={fadeIn('', '', 0.1, 1)}
            className='max-w-5xl text-base leading-[30px] text-primary sm:text-lg 
            md:text-xl lg:text-2xl'
          >
            I am actively seeking opportunities in software development.
          </motion.p>
        </div>
        <div
          className='flex w-full flex-[1] items-center justify-center md:pl-12 
          xl:flex-[2]'
        >
          <div className='relative h-48 w-48 rounded-full lg:h-56 lg:w-56'>
            <Image
              className='rounded-full object-cover'
              src={me.src}
              alt='Me'
              fill
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
