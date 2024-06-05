'use client';

import { AnimatePresence } from 'framer-motion';
import { ExternalLinkIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import SplashOut from '@/app/components/SplashOut';
import StandingNavbar from '@/app/components/navbar/StandingNavbar';
import { netflixClone } from '@/assets';
import { MagneticButton } from '@/components/MagneticButton';
import StarsCanvas from '@/components/canvas/StarCanvas';
import { netflix } from '@/constants';
import ProjectHeader from '../components/ProjectHeader';

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
        } mx-auto w-full max-w-8xl`}
      >
        <StandingNavbar />
        <div className={'relative mt-36 w-full pb-36 md:mt-44'}>
          <ProjectHeader
            title={netflix.title}
            date={netflix.date}
            category={netflix.category}
            keyTech={netflix.key_tech}
          />
          <div className='absolute bottom-40 right-0 z-20 -translate-x-1/2 translate-y-1/2 md:bottom-0 md:mx-16'>
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
        <div className='mx-auto w-full max-w-[110rem] md:px-16'>
          <div className='relative aspect-video w-full border bg-[#141316]'>
            <Image
              className='object-contain'
              src={netflixClone}
              alt='Title'
              fill
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default NetflixPage;
