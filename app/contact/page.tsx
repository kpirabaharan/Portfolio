'use client';

import { useState } from 'react';
import {
  MailIcon,
  PhoneIcon,
  FileTextIcon,
  LinkedinIcon,
  GithubIcon,
  MapPinIcon,
} from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

import SplashOut from '@/app/components/SplashOut';

import { StandingNavbar } from '@/app/components/navbar/StandingNavbar';
import { styles } from '@/lib/styles';
import { Separator } from '@/components/ui/separator';

const ContactPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className='h-full w-full'>
      <AnimatePresence>
        {isLoading && <SplashOut setIsLoading={setIsLoading} />}
      </AnimatePresence>
      <div className={`h-full w-full ${isLoading && 'hidden'}`}>
        <StandingNavbar />
        <div className={`w-full max-w-8xl mx-auto ${styles.padding}`}>
          <h1 className='mt-0 md:mt-8 text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>
            Get In Touch
          </h1>
          <Separator className='my-6 h-[2px]' />
          <div className='grid grid-cols-1 md:grid-cols-2 gap-y-8 '>
            <div className='flex gap-x-4 items-center'>
              <MailIcon size={24} />
              <a href='mailto:kpirabaharan3@gmail.com' className='text-xl'>
                kpirabaharan3@gmail.com
              </a>
            </div>

            <div className='flex gap-x-4 items-center '>
              <PhoneIcon size={24} />
              <a href='tel:4166173498' className='text-xl'>
                (416)-617-3498
              </a>
            </div>

            <div className='flex gap-x-4 items-center '>
              <LinkedinIcon size={24} />
              <a
                href='https://www.linkedin.com/in/kpirabaharan/'
                className='text-xl'
                target='_blank'
              >
                kpirabaharan
              </a>
            </div>

            <div className='flex gap-x-4 items-center '>
              <GithubIcon size={24} />
              <a
                href='https://github.com/kpirabaharan'
                className='text-xl'
                target='_blank'
              >
                kpirabaharan
              </a>
            </div>

            <div className='flex gap-x-4 items-center '>
              <FileTextIcon size={24} />
              <a
                href='./Keeshigan-Pirabaharan-Resume.pdf'
                className='text-xl'
                target='_blank'
              >
                Resume
              </a>
            </div>

            <div className='flex gap-x-4 items-center '>
              <MapPinIcon size={24} />
              <p className='text-xl'>Toronto, ON</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
