'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

import SplashOut from '@/app/components/SplashOut';
import Hero from '@/app/(footer)/sections/Hero';
import About from '@/app/(footer)/sections/About';
import Work from '@/app/(footer)/sections/Work';
import Education from '@/app/(footer)/sections/Education';
import Projects from '@/app/(footer)/sections/Projects';
import Contact from '@/app/(footer)/sections/Contact';

import { StandingNavbar } from '@/app/components/navbar/StandingNavbar';
import { StarsCanvas } from '@/components/StarCanvas';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <AnimatePresence>
        {isLoading && <SplashOut setIsLoading={setIsLoading} />}
      </AnimatePresence>
      <div
        className={`relative ${
          isLoading ? 'h-screen' : ''
        } overflow-hidden w-full`}
      >
        {!isLoading && <StarsCanvas />}
        <div className='h-screen bg-heroWallpaper bg-no-repeat bg-cover bg-center relative'>
          <StandingNavbar />
          <Hero />
        </div>
        <>
          <About />
          <Work />
          <Education />
          <Projects />
          <Contact />
        </>
      </div>
    </main>
  );
};

export default Home;