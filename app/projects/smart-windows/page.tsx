'use client';

import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import SplashOut from '@/app/components/SplashOut';

const SmartWindowsPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className='h-full w-full'>
      <AnimatePresence>
        {isLoading && <SplashOut setIsLoading={setIsLoading} />}
      </AnimatePresence>
    </div>
  );
};

export default SmartWindowsPage;
