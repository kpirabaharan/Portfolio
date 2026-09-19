'use client';

import { AnimatePresence } from 'motion/react';
import { useState, type PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

import SplashOut from '@/app/components/SplashOut';
import StandingNavbar from '@/app/components/navbar/StandingNavbar';
import { BackgroundGrid } from '@/components/BackgroundGrid';

// Splash transition + navbar + shared background for every non-home page.
export const PageShell = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className='relative w-full'>
      <AnimatePresence>
        {isLoading && <SplashOut setIsLoading={setIsLoading} />}
      </AnimatePresence>
      <div
        className={cn(
          'relative w-full',
          isLoading && 'h-screen overflow-hidden',
        )}
      >
        <BackgroundGrid />
        <div className='relative'>
          <StandingNavbar />
          <div className={className}>{children}</div>
        </div>
      </div>
    </main>
  );
};
