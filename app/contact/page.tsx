'use client';

import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import SplashOut from '@/app/components/SplashOut';

import StandingNavbar from '@/app/components/navbar/StandingNavbar';
import ContactCard from '@/components/ContactCard';
import { BackgroundBeams } from '@/components/ui/background-beams';

import { styles } from '@/lib/styles';

const ContactPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className='h-full w-full'>
      <AnimatePresence>
        {isLoading && <SplashOut setIsLoading={setIsLoading} />}
      </AnimatePresence>
      <div className={`h-full w-full ${isLoading && 'hidden'}`}>
        <BackgroundBeams />
        <StandingNavbar />
        <div className={`mx-auto w-full max-w-8xl ${styles.padding}`}>
          <h1 className='mt-0 text-4xl md:mt-8 md:text-5xl lg:text-6xl xl:text-7xl'>
            Get In Touch
          </h1>
          {/* <Separator className='my-6 h-[2px]' /> */}
          <ContactCard />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
