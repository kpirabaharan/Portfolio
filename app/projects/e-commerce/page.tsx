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
import DisplayPicture from '@/components/DisplayPicture';

import { ecommerceAdmin, ecommerceStore } from '@/assets';
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
        <div className={'relative mt-36 w-full pb-36 md:mt-44'}>
          <ProjectHeader
            title={eCommerce.title}
            date={eCommerce.date}
            category={eCommerce.category}
            keyTech={eCommerce.key_tech}
          />
          <div
            className='absolute bottom-[26rem] right-0 z-20 
            -translate-x-1/2 translate-y-1/2 md:bottom-0 md:mx-16 md:-translate-x-[200%]'
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
            className='absolute bottom-40 right-0 z-20 
            -translate-x-1/2 translate-y-1/2 md:bottom-0 md:mx-16'
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
        <div className='mx-auto w-full max-w-[110rem] md:px-16'>
          <div
            className='relative aspect-video w-full border 
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
        <div className='mx-auto mt-32 flex max-w-8xl flex-col text-center'>
          <div
            className={`${styles.padding} flex h-screen flex-col justify-center gap-y-4`}
          >
            <h2 className='text-5xl font-medium'>Admin Dashboard</h2>
            <p className='text-lg'>
              The admin dashboard allows the user to manage multiple online
              stores from a centralized CMS.
            </p>
            <DisplayPicture src={'/project-vids/e-commerce-admin-video.mp4'} />
          </div>
          <div
            className={`${styles.padding} flex h-screen flex-col justify-center gap-y-4`}
          >
            <h2 className='text-5xl font-medium'>Online Store</h2>
            <p className='text-lg'>
              A responsive online store that allows users to browse and purchase
              products with stripe integration.
            </p>
            <DisplayPicture src={ecommerceStore} />
          </div>
          <div
            className={`${styles.padding} flex h-screen flex-col justify-center gap-y-4`}
          >
            <h2 className='text-5xl font-medium'>Mobile Application</h2>
            <p className='text-lg'>
              Multi-platform mobile application that allows users to browse and
              purchase products with stripe integration.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ECommercePage;
