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
      <div className='flex flex-col-reverse md:flex-row w-full mt-8 gap-y-8'>
        <div className='flex-[4] xl:flex-[3] space-y-8'>
          <motion.p
            variants={fadeIn('', '', 0.1, 1)}
            className='max-w-3xl leading-8 text-base sm:text-lg md:text-xl
            text-muted-foreground'
          >
            I&apos;m{' '}
            <span className='text-primary font-bold'>
              Keeshigan Pirabaharan,{' '}
            </span>
            a 24-year-old{' '}
            <span className='text-primary font-bold'>
              Mechatronics/Software Engineer
            </span>{' '}
            with a track record of crafting{' '}
            <span className='text-primary font-bold'>innovative</span> solutions
            that seamlessly blend Frontend and Backend technologies. I possess a
            strong aptitude for{' '}
            <span className='text-primary font-bold'>rapid learning</span> and a
            genuine enthusiasm for adopting{' '}
            <span className='text-primary font-bold'>new technologies</span> to
            engineer efficient and{' '}
            <span className='text-primary font-bold'>scalable solutions</span>{' '}
            that address real-world challenges.
          </motion.p>
          <motion.p
            variants={fadeIn('', '', 0.1, 1)}
            className='max-w-5xl leading-[30px] text-base sm:text-lg md:text-xl 
            lg:text-2xl text-primary'
          >
            I am actively seeking opportunities in software development.
          </motion.p>
        </div>
        <div
          className='flex w-full items-center justify-center md:pl-12 flex-[1] 
          xl:flex-[2]'
        >
          <div className='h-48 w-48 lg:h-56 lg:w-56 rounded-full relative'>
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
