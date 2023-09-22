'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { scroller } from 'react-scroll';

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

  const [initialPortfolio, setInitialPortfolio] = useState<{
    y: number | string;
  }>({ y: '150%' });
  const [animatePortfolio, setAnimatePortfolio] = useState<{ y: number }>({
    y: 0,
  });
  const [transitionPortfolio, setTransitionPortfolio] = useState({
    duration: 0.5,
  });

  useEffect(() => {
    if (window.location.hash) {
      setInitialPortfolio({ y: 0 });
      setAnimatePortfolio({ y: 0 });
      setTransitionPortfolio({ duration: 0 });
    } else {
      // Fragment doesn't exist
    }
  }, []);

  return (
    <div>
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
        <div className='relative overflow-hidden w-full'>
          {isCanvas && <StarsCanvas />}
          <motion.div
            initial={initialPortfolio}
            animate={animatePortfolio}
            transition={transitionPortfolio}
            onAnimationComplete={() => {
              setIsCanvas(true);
              scroller.scrollTo('#active', { to: 'active' });
            }}
            className='h-screen bg-heroWallpaper bg-no-repeat bg-cover bg-center'
          >
            <StandingNavbar />
            <Hero />
          </motion.div>

          <About />
          <Work />
          <Education />
          <FeaturedProjects />
        </div>
      )}
    </div>
  );
};

export default Home;
