'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import SplashOut from '@/app/components/SplashOut';
import Hero from '@/app/sections/Hero';
import About from '@/app/sections/About';
import Work from '@/app/sections/Work';
import Education from '@/app/sections/Education';
import Skills from '@/app/sections/Skills';
import Projects from '@/app/sections/Projects';
import Contact from '@/app/sections/Contact';

import StandingNavbar from '@/app/components/navbar/StandingNavbar';
import StarsCanvas from '@/components/canvas/StarCanvas';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <AnimatePresence>
        {isLoading && <SplashOut setIsLoading={setIsLoading} />}
      </AnimatePresence>
      {!isLoading && <StarsCanvas />}
      <div
        className={`relative ${
          isLoading ? 'h-screen' : ''
        } overflow-hidden w-full`}
      >
        <div className='h-screen bg-heroWallpaper bg-no-repeat bg-cover bg-center relative'>
          <StandingNavbar />
          <Hero />
        </div>
        <>
          <About />
          <Work />
          <Education />
          <Skills />
          <Projects />
          <Contact />
        </>
      </div>
    </main>
  );
};

export default Home;
