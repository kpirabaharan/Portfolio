'use client';

import { PropsWithChildren, useState } from 'react';
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
import MagneticComponent from '@/hoc/MagneticComponent';

interface ContactLinkProps extends PropsWithChildren {}

const ContactLink = ({ children }: ContactLinkProps) => {
  return (
    <MagneticComponent
      className='flex gap-x-4 items-center w-fit group'
      modifier={{ x: 0.25, y: 0.5 }}
    >
      {children}
    </MagneticComponent>
  );
};

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
            <ContactLink>
              <MailIcon size={24} />
              <a
                href='mailto:kpirabaharan3@gmail.com'
                className='text-xl group-hover:underline underline-offset-8'
              >
                kpirabaharan3@gmail.com
              </a>
            </ContactLink>

            <ContactLink>
              <PhoneIcon size={24} />
              <a
                href='tel:4166173498'
                className='text-xl group-hover:underline underline-offset-8'
              >
                (416)-617-3498
              </a>
            </ContactLink>

            <ContactLink>
              <LinkedinIcon size={24} />
              <a
                href='https://www.linkedin.com/in/kpirabaharan/'
                className='text-xl group-hover:underline underline-offset-8'
                target='_blank'
              >
                kpirabaharan
              </a>
            </ContactLink>

            <ContactLink>
              <GithubIcon size={24} />
              <a
                href='https://github.com/kpirabaharan'
                className='text-xl group-hover:underline underline-offset-8'
                target='_blank'
              >
                kpirabaharan
              </a>
            </ContactLink>

            <ContactLink>
              <FileTextIcon size={24} />
              <a
                href='./Keeshigan-Pirabaharan-Resume.pdf'
                className='text-xl group-hover:underline underline-offset-8'
                target='_blank'
              >
                Resume
              </a>
            </ContactLink>

            <ContactLink>
              <MapPinIcon size={24} />
              <p className='text-xl'>Toronto, ON</p>
            </ContactLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
