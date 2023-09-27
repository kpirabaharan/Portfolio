'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import Splash from '@/app/components/Splash';

import { StandingNavbar } from '@/app/components/navbar/StandingNavbar';

const ContactPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className='h-full w-full'>
      <AnimatePresence>
        {isLoading && <Splash setIsLoading={setIsLoading} />}
      </AnimatePresence>
      <div className={`h-full w-full ${isLoading && 'hidden'}`}>
        <StandingNavbar />
      </div>
    </div>
  );
};

export default ContactPage;
