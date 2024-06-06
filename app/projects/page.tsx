'use client';

import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

import SplashOut from '@/app/components/SplashOut';
import StandingNavbar from '@/app/components/navbar/StandingNavbar';
import { ProjectParallax } from '@/components/ProjectParallax';
import { allProjects } from '@/constants';

// const filters = [
//   { title: 'All', value: 'all' },
//   { title: 'Full Stack', value: 'full-stack' },
//   { title: 'Mobile', value: 'mobile-app' },
//   { title: 'Embedded', value: 'embedded-systems' },
// ];

const ProjectsPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        window.scrollBy(0, 1);
      }, 300);
    }
  }, [isLoading]);

  return (
    <div className='h-full w-full'>
      <AnimatePresence>
        {isLoading && <SplashOut setIsLoading={setIsLoading} />}
      </AnimatePresence>
      <div className={`h-full w-full ${isLoading && 'hidden'}`}>
        <StandingNavbar />
        <ProjectParallax projects={allProjects} />
      </div>
    </div>
  );
};

export default ProjectsPage;
