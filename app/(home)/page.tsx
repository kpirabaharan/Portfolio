'use client';

import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useIntersectionObserver } from 'usehooks-ts';

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

import { WavyBackground } from '@/components/ui/wavy-background';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 1,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const canvasGL = document.createElement('canvas');
  let gl: WebGLRenderingContext | null;
  try {
    gl =
      (canvasGL.getContext('webgl') as WebGLRenderingContext) ||
      (canvasGL.getContext('experimental-webgl') as WebGLRenderingContext);
  } catch (err) {
    gl = null;
  }

  return (
    <main>
      <AnimatePresence>
        {isLoading && <SplashOut setIsLoading={setIsLoading} />}
      </AnimatePresence>
      {/* {!isLoading && <StarsCanvas />} */}
      <div
        className={`relative ${
          isLoading ? 'h-screen' : ''
        } w-full overflow-hidden`}
      >
        {gl ? (
          <WavyBackground speed='slow' className='relative h-screen w-full'>
            <StandingNavbar />
            <Hero />
          </WavyBackground>
        ) : (
          <div className='relative h-screen w-full dark:bg-grid-white/[0.05]'>
            <div className='pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-background' />
            <StandingNavbar />
            <Hero />
          </div>
        )}
        <div ref={ref} className='w-full' />
        <About />
        <Work />
        <Education />
        <Certificates />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  );
};

export default Home;
