'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Splash from '@/app/(home)/sections/Splash';
import Hero from '@/app/(home)/sections/Hero';
import About from '@/app/(home)/sections/About';
import Work from '@/app/(home)/sections/Work';
import Education from '@/app/(home)/sections/Education';
import FeaturedProjects from '@/app/(home)/sections/FeaturedProjects';

import { StandingNavbar } from '@/components/navbar/StandingNavbar';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDoneLoading, setIsDoneLoading] = useState(false);

  return (
    <div className='w-full overflow-hidden'>
      <AnimatePresence onExitComplete={() => setIsDoneLoading(true)}>
        {isLoading && (
          <motion.div
            className='h-screen w-screen flex items-center justify-center'
            initial={{ y: 0 }}
            exit={{ y: '-50%' }}
            transition={{
              duration: 0.5,
            }}
          >
            <Splash setIsLoading={setIsLoading} />
          </motion.div>
        )}
      </AnimatePresence>
      {isDoneLoading && (
        <>
          <motion.div
            initial={{ y: '150%' }}
            animate={{ y: 0 }}
            transition={{
              duration: 1,
            }}
            className='h-screen bg-heroWallpaper bg-no-repeat bg-cover bg-center relative'
          >
            <StandingNavbar />
            <Hero />
          </motion.div>
          <div className='h-full w-full bg-background overflow-none'>
            <About />
            <Work />
            <Education />
            <FeaturedProjects />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
