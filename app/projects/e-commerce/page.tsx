'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import SplashOut from '@/app/components/SplashOut';

const ECommercePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className='h-full w-full'>
      <AnimatePresence>
        {isLoading && <SplashOut setIsLoading={setIsLoading} />}
      </AnimatePresence>
    </div>
  );
};

export default ECommercePage;
