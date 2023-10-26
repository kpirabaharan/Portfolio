'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';
import { ExternalLinkIcon } from 'lucide-react';

import { styles } from '@/lib/styles';

import StandingNavbar from '@/app/components/navbar/StandingNavbar';
import SplashOut from '@/app/components/SplashOut';
import { MagneticButton } from '@/components/MagneticButton';
import { Separator } from '@/components/ui/separator';
import ProjectHeader from '../components/ProjectHeader';

import { ecommerceAdmin } from '@/assets';
import { eCommerce } from '@/constants';

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
          <ProjectHeader
            title={eCommerce.title}
            date={eCommerce.date}
            category={eCommerce.category}
            keyTech={eCommerce.key_tech}
          />
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
