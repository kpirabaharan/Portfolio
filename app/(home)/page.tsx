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
import { StarsCanvas } from '@/components/StarCanvas';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPortfolio, setIsPortfolio] = useState(false);
  const [isCanvas, setIsCanvas] = useState(false);

  return (
    <div className='w-full overflow-hidden'>
      <AnimatePresence onExitComplete={() => setIsPortfolio(true)}>
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
      {isPortfolio && (
        <div className='relative'>
          {isCanvas && <StarsCanvas />}
          <motion.div
            initial={{ y: '150%' }}
            animate={{ y: 0 }}
            transition={{
              duration: 1,
            }}
            onAnimationComplete={() => setIsCanvas(true)}
            className='h-screen bg-heroWallpaper bg-no-repeat bg-cover bg-center'
          >
            <StandingNavbar />
            <Hero />
          </motion.div>
          <div className='h-full w-full overflow-none z-10'>
            <About />
            <Work />
            <Education />
            <FeaturedProjects />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
