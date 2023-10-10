'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

import SectionWrapper from '@/hoc/SectionWrapper';
import { fadeIn, textVariant } from '@/lib/transitions';
import { styles } from '@/lib/styles';

import LocomotiveScroll from 'locomotive-scroll';

import { MagneticButton } from '@/components/MagneticButton';

const About = () => {
  const scroll = new LocomotiveScroll();
  const router = useRouter();

  return (
    <div className='grid grid-cols-5 w-full relative gap-y-4'>
      <div className='flex flex-col gap-y-8 col-span-5 md:col-span-4 xl:col-span-3'>
        <motion.h2
          variants={textVariant()}
          className={`${styles.sectionHead} uppercase`}
        >
          About
        </motion.h2>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='max-w-3xl leading-[30px] text-base sm:text-lg md:text-xl 
          lg:text-2xl text-muted-foreground'
        >
          I&apos;m Keeshigan Pirabaharan, a 24-year-old{' '}
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
          className='max-w-4xl leading-[30px] text-base sm:text-lg md:text-xl 
          lg:text-2xl text-primary'
        >
          I am actively seeking opportunities in software development.
        </motion.p>
      </div>
      <div
        className='relative h-full w-[80%] mx-auto col-span-5 md:col-span-1 xl:col-span-2
        flex justify-end'
      >
        <div
          className='md:absolute md:top-1/2 md:-translate-y-1/2 
          md:left-1/2 md:-translate-x-1/2'
          data-scroll-container
        >
          {/* Mobile */}
          <div className='flex md:hidden'>
            <MagneticButton onClick={() => router.push('/about')}>
              <p className='text-lg lg:text-xl text-primary-foreground'>
                About Me
              </p>
            </MagneticButton>
          </div>

          {/* Desktop */}
          <div className='md:flex hidden' data-scroll data-scroll-speed='1'>
            <MagneticButton onClick={() => router.push('/about')}>
              <p className='text-lg lg:text-xl text-primary-foreground'>
                About Me
              </p>
            </MagneticButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
