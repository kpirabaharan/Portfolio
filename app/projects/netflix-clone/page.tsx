'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ExternalLinkIcon } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

import ProjectHeader from '../components/ProjectHeader';
import SplashOut from '@/app/components/SplashOut';
import StandingNavbar from '@/app/components/navbar/StandingNavbar';
import StarsCanvas from '@/components/canvas/StarCanvas';
import { MagneticButton } from '@/components/MagneticButton';
import { netflix } from '@/constants';

const NetflixPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main>
      <AnimatePresence>
        {isLoading && <SplashOut setIsLoading={setIsLoading} />}
      </AnimatePresence>
      {!isLoading && <StarsCanvas />}
      <div
        className={`relative ${
          isLoading ? 'h-screen' : ''
        } w-full max-w-8xl mx-auto`}
      >
        <StandingNavbar />
        <div className={'w-full mt-36 md:mt-44 relative pb-36'}>
          <ProjectHeader
            title={netflix.title}
            date={netflix.date}
            category={netflix.category}
            keyTech={netflix.key_tech}
          />
          <div
            className='absolute bottom-40 md:bottom-0 translate-y-1/2 
            right-0 -translate-x-1/2 z-20 md:mx-16'
          >
            <Link href={netflix.website} target='_blank'>
              <MagneticButton onClick={() => {}}>
                <div className='flex items-end gap-x-2'>
                  <p className='text-lg leading-5'>Live Site</p>
                  <ExternalLinkIcon />
                </div>
              </MagneticButton>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NetflixPage;
