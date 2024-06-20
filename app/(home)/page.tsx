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

import { Spotlight } from '@/components/ui/spotlight';
import { WavyBackground } from '@/components/ui/wavy-background';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (!isMounted) setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) window.scrollTo(0, 0);
  }, []);

  if (!isMounted) {
    return null;
  }

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
            <Spotlight
              className='-left-16 -top-12 h-[24rem] md:-left-20 md:-top-16 md:h-[40rem] lg:-left-10 lg:-top-10'
              fill='teal'
            />
            <Spotlight
              className='-top-12 left-6 h-[24rem] md:-top-16 md:left-24 md:h-[40rem] lg:-top-10 lg:left-40'
              fill='teal'
            />
            <Spotlight
              className='-top-10 left-[22rem] hidden h-[40rem] xl:block'
              fill='teal'
            />
            <Spotlight className='left-[90%] top-10 h-[80vh]' fill='purple' />
            <StandingNavbar />
            <Hero />
          </div>
        )}
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
