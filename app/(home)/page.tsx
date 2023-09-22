'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { animateScroll as scroll } from 'react-scroll';

import Splash from '@/app/(home)/sections/Splash';
import Hero from '@/app/(home)/sections/Hero';
import About from '@/app/(home)/sections/About';
import Work from '@/app/(home)/sections/Work';
import Education from '@/app/(home)/sections/Education';
import FeaturedProjects from '@/app/(home)/sections/FeaturedProjects';

import { StandingNavbar } from '@/components/navbar/StandingNavbar';
import { StarsCanvas } from '@/components/StarCanvas';
import { useRouter } from 'next/navigation';

const Home = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isPortfolio, setIsPortfolio] = useState(true);
  const [isCanvas, setIsCanvas] = useState(false);

  useEffect(() => {
    if (window.location.hash) {
      router.replace('/');
    }
  }, [router]);

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
            initial={{ y: '150%' }}
            animate={{ y: 0 }}
            transition={{
              duration: 1,
            }}
            onAnimationComplete={() => {
              setIsCanvas(true);
            }}
            className='h-screen bg-heroWallpaper bg-no-repeat bg-cover bg-center'
          >
            <StandingNavbar />
            <Hero />
          </motion.div>
          {isCanvas && (
            <div>
              <About />
              <Work />
              <Education />
              <FeaturedProjects />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
