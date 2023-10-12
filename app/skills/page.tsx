'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { styles } from '@/lib/styles';

import SplashOut from '@/app/components/SplashOut';
import StandingNavbar from '@/app/components/navbar/StandingNavbar';
import Skills from '@/components/Skills';

const SkillsPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className='min-h-[calc(100vh-128px)] md:h-[calc(100vh-128px)] w-full 
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
        <h1 className={`${styles.pageHead} uppercase`}>Skills</h1>
        <Skills />
      </div>
    </div>
  );
};

export default SkillsPage;
