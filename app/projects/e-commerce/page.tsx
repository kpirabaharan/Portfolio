'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence } from 'framer-motion';
import { ExternalLinkIcon } from 'lucide-react';

import { styles } from '@/lib/styles';

import ProjectHeader from '../components/ProjectHeader';
import StandingNavbar from '@/app/components/navbar/StandingNavbar';
import SplashOut from '@/app/components/SplashOut';
import StarsCanvas from '@/components/canvas/StarCanvas';
import { MagneticButton } from '@/components/MagneticButton';

import { ecommerceStore } from '@/assets';
import { eCommerce } from '@/constants';

const ECommercePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main>
      <AnimatePresence>
        {isLoading && <SplashOut setIsLoading={setIsLoading} />}
      </AnimatePresence>
      {!isLoading && <StarsCanvas />}
      <div className={`relative ${isLoading ? 'h-screen' : ''} w-full`}>
        <StandingNavbar />
        <div className={'w-full mt-36 md:mt-44 relative pb-36'}>
          <ProjectHeader
            title={eCommerce.title}
            date={eCommerce.date}
            category={eCommerce.category}
            keyTech={eCommerce.key_tech}
          />
          <div
            className='absolute bottom-[26rem] md:bottom-0 translate-y-1/2 
            right-0 -translate-x-1/2 md:-translate-x-[200%] z-20 md:mx-16'
          >
            <Link href={eCommerce.store_site_1} target='_blank'>
              <MagneticButton onClick={() => {}}>
                <div className='flex items-end gap-x-2'>
                  <p className='text-lg leading-5'>Demo #1</p>
                  <ExternalLinkIcon />
                </div>
              </MagneticButton>
            </Link>
          </div>
          <div
            className='absolute bottom-40 md:bottom-0 translate-y-1/2 
            right-0 -translate-x-1/2 z-20 md:mx-16'
          >
            <Link href={eCommerce.store_site_2} target='_blank'>
              <MagneticButton onClick={() => {}}>
                <div className='flex items-end gap-x-2'>
                  <p className='text-lg leading-5'>Demo #2</p>
                  <ExternalLinkIcon />
                </div>
              </MagneticButton>
            </Link>
          </div>
        </div>
        <div className='w-full md:px-16 max-w-[110rem] mx-auto'>
          <div
            className='w-full aspect-video relative border 
            bg-white'
          >
            <Image
              className='object-contain'
              src={ecommerceStore}
              alt='Title'
              fill
            />
          </div>
        </div>
        <div className='max-w-8xl mx-auto'>
          <div className={`mt-40 ${styles.padding}`}>
            <h2 className='text-5xl'>Part 1: Admin Dashboard</h2>
          </div>
          <div className={`mt-40 ${styles.padding}`}>
            <h2 className='text-5xl'>Part 2: Online Store</h2>
          </div>
          <div className={`mt-40 ${styles.padding}`}>
            <h2 className='text-5xl'>Part 3: Mobile Application</h2>
          </div>
        </div>
        {/* <div className='mt-48 w-full aspect-video relative'>
          <Image
            className='object-contain'
            src={studioDisplay.src}
            alt='Frame'
            fill
          />
        </div> */}
      </div>
    </main>
  );
};

export default ECommercePage;
