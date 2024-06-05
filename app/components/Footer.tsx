'use client';

import { format } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';
import { useEffect, useState } from 'react';

import MagneticComponent from '@/hoc/MagneticComponent';

import { Separator } from '@/components/ui/separator';
import { socials } from '@/constants';

interface FooterProps {
  date: Date;
}

const Footer = ({ date }: FooterProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const torontoTimeZone = 'America/Toronto';
  const [torontoDate, setTorontoDate] = useState<Date>(
    toZonedTime(new Date(), torontoTimeZone),
  );

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTorontoDate(toZonedTime(new Date(), torontoTimeZone));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div
      className={`mt-auto flex w-full flex-col-reverse justify-between px-4 py-6 sm:px-16 sm:py-8 md:flex-row`}
    >
      <div className='flex flex-row justify-between gap-x-12 md:justify-start'>
        <div className='flex flex-col gap-y-4 md:gap-y-6'>
          <p className='text-xs uppercase text-muted-foreground'>
            Last Modified
          </p>
          <p className='text-sm'>{format(date, 'MMMM do, yyyy')}</p>
        </div>
        <div className='flex flex-col gap-y-4 md:gap-y-6'>
          <p className='text-xs uppercase text-muted-foreground'>Local Time</p>
          <p className='text-sm'>{format(torontoDate, 'hh:mm a z')}</p>
        </div>
      </div>
      <Separator className='my-6 md:hidden' />
      <div className='flex flex-col gap-y-4 md:gap-y-6'>
        <p className='text-xs uppercase text-muted-foreground'>Socials</p>
        <div className='flex flex-row gap-x-12'>
          {socials.map((item, index) => {
            const { name, link } = item;
            return (
              <MagneticComponent key={index} modifier={{ x: 0.3, y: 0.3 }}>
                <a
                  className='font-light underline-offset-8 hover:underline'
                  href={link}
                  target='_blank'
                >
                  {name}
                </a>
              </MagneticComponent>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
