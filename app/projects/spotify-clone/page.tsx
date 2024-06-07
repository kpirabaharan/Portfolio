'use client';

import { AnimatePresence } from 'framer-motion';
import { ExternalLinkIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import SplashOut from '@/app/components/SplashOut';
import StandingNavbar from '@/app/components/navbar/StandingNavbar';
import { MagneticButton } from '@/components/MagneticButton';

import ProjectHeader from '../components/ProjectHeader';

import { spotifyClone } from '@/assets';
import { spotify } from '@/constants';

const SpotifyPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className='h-full w-full'>
      <AnimatePresence>
        {isLoading && <SplashOut setIsLoading={setIsLoading} />}
      </AnimatePresence>

      <div
        className={`relative ${
          isLoading ? 'h-screen' : ''
        } mx-auto w-full max-w-8xl`}
      >
        <StandingNavbar />
        <div className={'relative mt-36 w-full pb-36 md:mt-44'}>
          <ProjectHeader
            title={spotify.title}
            date={spotify.date}
            category={spotify.category}
            keyTech={spotify.key_tech}
          />
          <div className='absolute bottom-40 right-0 z-20 -translate-x-1/2 translate-y-1/2 md:bottom-0 md:mx-16'>
            <Link href={spotify.website} target='_blank'>
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
          <div className='relative aspect-video w-full border bg-black'>
            <Image
              className='object-contain'
              src={spotifyClone}
              alt='Title'
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotifyPage;
