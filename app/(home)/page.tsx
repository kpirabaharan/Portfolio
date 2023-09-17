'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';

import Hero from '@/app/(home)/sections/Hero';
import About from '@/app/(home)/sections/About';

import StandingNavbar from '@/components/navbar/StandingNavbar';
import Splash from './sections/Splash';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className='w-full overflow-x-hidden'>
      {isLoading ? (
        <Splash setIsLoading={setIsLoading} />
      ) : (
        <>
          <motion.div
            initial={{ y: '200%' }}
            animate={{ y: 0 }}
            transition={{
              ease: 'easeOut',
              duration: 1,
            }}
            className='h-screen bg-wallpaper bg-no-repeat bg-cover bg-center relative'
          >
            <StandingNavbar />
            <Hero />
          </motion.div>
          <About />
        </>
      )}
    </div>
  );
};

// bg-wallpaper bg-no-repeat bg-cover bg-center

export default Home;
