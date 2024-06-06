'use client';

import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

import SplashOut from '@/app/components/SplashOut';
import StandingNavbar from '@/app/components/navbar/StandingNavbar';
import About from '@/app/sections/About';
import Certificates from '@/app/sections/Certificates';
import Contact from '@/app/sections/Contact';
import Education from '@/app/sections/Education';
import Hero from '@/app/sections/Hero';
import Projects from '@/app/sections/Projects';
import Skills from '@/app/sections/Skills';
import Work from '@/app/sections/Work';

import StarsCanvas from '@/components/canvas/StarCanvas';
import { WavyBackground } from '@/components/ui/wavy-background';

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
        } w-full overflow-hidden`}
      >
        <WavyBackground speed='fast' className='relative h-screen w-full'>
          <StandingNavbar />
          <Hero />
        </WavyBackground>
        <>
          <About />
          <Work />
          <Education />
          <Certificates />
          <Skills />
          <Projects />
          <Contact />
        </>
      </div>
    </main>
  );
};

export default Home;
