'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import SplashOut from '@/app/components/SplashOut';

import { StandingNavbar } from '@/app/components/navbar/StandingNavbar';
import { Skills } from '@/app/components/Skills';

const SkillsPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className='h-full w-full'>
      <AnimatePresence>
        {isLoading && <SplashOut setIsLoading={setIsLoading} />}
      </AnimatePresence>
      <div className={`h-full w-full ${isLoading && 'hidden'}`}>
        <StandingNavbar />
        <Skills />
      </div>
    </div>
  );
};

export default SkillsPage;
