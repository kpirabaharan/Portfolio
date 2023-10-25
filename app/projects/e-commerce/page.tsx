'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence } from 'framer-motion';
import { ExternalLinkIcon } from 'lucide-react';

import { styles } from '@/lib/styles';

import StandingNavbar from '@/app/components/navbar/StandingNavbar';
import SplashOut from '@/app/components/SplashOut';
import { MagneticButton } from '@/components/MagneticButton';
import { Separator } from '@/components/ui/separator';

import { ecommerceAdmin } from '@/assets';
import { allProjects } from '@/constants';

const ECommercePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className='h-full w-full'>
      <AnimatePresence>
        {isLoading && <SplashOut setIsLoading={setIsLoading} />}
      </AnimatePresence>
      <StandingNavbar />
      <div className={`h-full w-full ${isLoading && 'hidden'}`}>
        <div className={'w-full max-w-8xl mx-auto relative pb-36'}>
          <div className={`w-full mx-auto ${styles.projectPaddingX}`}>
            <h1 className='mt-36 md:mt-44 text-4xl md:text-5xl lg:text-7xl xl:text-8xl'>
              E-Commerce Website
            </h1>
            <div className='mt-12 md:mt-36 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8'>
              <div className='flex flex-col gap-y-6 md:gap-y-8'>
                <p className='text-xs md:text-sm text-muted-foreground'>
                  Category
                </p>
                <Separator />
                <p className='text-base md:text-lg'>Full Stack</p>
              </div>
              <div className='flex flex-col gap-y-6 md:gap-y-8'>
                <p className='text-xs md:text-sm text-muted-foreground'>
                  Category
                </p>
                <Separator />
                <p className='text-base md:text-lg'>{allProjects[0].type}</p>
              </div>
              <div className='flex flex-col gap-y-6 md:gap-y-8'>
                <p className='text-xs md:text-sm text-muted-foreground'>Date</p>
                <Separator />
                <p className='text-base md:text-lg'>September 2023</p>
              </div>
            </div>
          </div>
          <div
            className='absolute bottom-40 md:bottom-0 translate-y-1/2 
            right-0 -translate-x-1/2 z-20 md:mx-16'
          >
            <MagneticButton onClick={() => {}}>
              <div className='flex items-end gap-x-2'>
                <p className='text-lg leading-5'>Live Site</p>
                <ExternalLinkIcon />
              </div>
            </MagneticButton>
          </div>
        </div>
        <div className='w-full md:px-16'>
          <div className='max-w-8xl mx-auto aspect-video relative border'>
            <Image
              className='object-cover'
              src={ecommerceAdmin}
              alt='Title'
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ECommercePage;
