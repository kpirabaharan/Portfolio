'use client';

import { AnimatePresence } from 'motion/react';
import { useState } from 'react';

import { cn } from '@/lib/utils';

import SplashOut from '@/app/components/SplashOut';
import About from '@/app/sections/About';
import Certificates from '@/app/sections/Certificates';
import Contact from '@/app/sections/Contact';
import Education from '@/app/sections/Education';
import Hero from '@/app/sections/Hero';
import Projects from '@/app/sections/Projects';
import Skills from '@/app/sections/Skills';
import Work from '@/app/sections/Work';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main>
      <AnimatePresence>
        {isLoading && <SplashOut setIsLoading={setIsLoading} />}
      </AnimatePresence>
      <div
        className={cn(
          'relative w-full overflow-hidden',
          isLoading && 'h-screen',
        )}
      >
        <Hero />
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
