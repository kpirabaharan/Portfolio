'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { styles } from '@/lib/styles';

import SplashOut from '@/app/components/SplashOut';
import StandingNavbar from '@/app/components/navbar/StandingNavbar';
import Skills from '@/components/Skills';
import { AiFillStar } from 'react-icons/ai';

const SkillsPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className='min-h-[calc(100vh-205px)] lg:h-[calc(100vh-128px)] w-full 
      relative'
    >
      <AnimatePresence>
        {isLoading && <SplashOut setIsLoading={setIsLoading} />}
      </AnimatePresence>
      <StandingNavbar />
      <div
        className={`h-full w-full ${isLoading && 'hidden'} mx-auto ${
          styles.padding
        } flex flex-col text-center sm:text-start`}
      >
        <div className='flex sm:flex-row flex-col items-center'>
          <h1 className={`${styles.pageHead} uppercase`}>Skills</h1>
          <div className='flex flex-row gap-x-2 items-center'>
            <AiFillStar className='ml-8' />
            <p>Indicates atleast 3 years of experience</p>
          </div>
        </div>
        <Skills />
      </div>
    </div>
  );
};

export default SkillsPage;
