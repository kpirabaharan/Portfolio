'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { styles } from '@/lib/styles';

import SplashOut from '@/app/components/SplashOut';
import { StandingNavbar } from '@/app/components/navbar/StandingNavbar';
import { MagneticButton } from '@/components/MagneticButton';
import { Separator } from '@/components/ui/separator';

const filters = [
  { title: 'All', value: 'all' },
  { title: 'Full Stack', value: 'full-stack' },
  { title: 'Mobile', value: 'mobile-app' },
  { title: 'Embedded', value: 'embedded-systems' },
];

const ProjectsPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className='h-full w-full'>
      <AnimatePresence>
        {isLoading && <SplashOut setIsLoading={setIsLoading} />}
      </AnimatePresence>
      <div className={`h-full w-full ${isLoading && 'hidden'}`}>
        <StandingNavbar />
        <div className={`w-full max-w-8xl mx-auto ${styles.padding}`}>
          <h1 className='mt-8 text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>
            A showcase of my projects
          </h1>
          <Separator className='my-6 h-[2px]' />
          <div className='flex flex-row gap-x-6 w-full'>
            {filters.map((cat, index) => (
              <MagneticButton size={'filter'} key={index} onClick={() => {}}>
                <p className='text-base lg:text-lg font-normal text-primary-foreground'>
                  {cat.title}
                </p>
              </MagneticButton>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
