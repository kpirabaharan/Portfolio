'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { AiFillStar } from 'react-icons/ai';

import { styles } from '@/lib/styles';

import SplashOut from '@/app/components/SplashOut';
import StandingNavbar from '@/app/components/navbar/StandingNavbar';

import Skills from '@/components/Skills';

const SkillsPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className='relative h-full w-full'>
      <AnimatePresence>
        {isLoading && <SplashOut setIsLoading={setIsLoading} />}
      </AnimatePresence>
      <StandingNavbar />
      <div
        className={`h-full w-full ${isLoading && 'hidden'} mx-auto ${
          styles.padding
        } flex flex-col`}
      >
        <div className='flex flex-col items-center justify-center gap-y-4'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>
            Skills
          </h1>
          <div className='flex flex-row items-center gap-x-2'>
            <AiFillStar />
            <p>Indicates atleast 3 years of experience</p>
          </div>
        </div>
        <Skills />
      </div>
    </div>
  );
};

export default SkillsPage;
