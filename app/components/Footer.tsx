'use client';

import { format } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';
import { useSyncExternalStore } from 'react';

import MagneticComponent from '@/hoc/MagneticComponent';
import { styles } from '@/lib/styles';
import { cn } from '@/lib/utils';

import { socials } from '@/constants';

const TIME_ZONE = 'America/Toronto';

// The clock shows minutes, so the snapshot only changes once a minute.
const subscribeToClock = (onTick: () => void) => {
  const interval = setInterval(onTick, 1000);
  return () => clearInterval(interval);
};
const getMinute = () => Math.floor(Date.now() / 60_000);
const getServerMinute = () => null;

const Label = ({ children }: { children: React.ReactNode }) => (
  <p className='font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase'>
    {children}
  </p>
);

interface FooterProps {
  date: Date | null;
}

const Footer = ({ date }: FooterProps) => {
  // null on the server, so the clock can't cause a hydration mismatch.
  const minute = useSyncExternalStore(
    subscribeToClock,
    getMinute,
    getServerMinute,
  );

  return (
    <footer className='mt-auto border-t'>
      <div
        className={cn(
          styles.container,
          'flex flex-col-reverse justify-between gap-8 py-8 md:flex-row md:items-end',
        )}
      >
        <div className='flex flex-row gap-12'>
          {date && (
            <div className='flex flex-col gap-3'>
              <Label>Last Modified</Label>
              <p className='text-sm'>{format(date, 'MMMM do, yyyy')}</p>
            </div>
          )}
          <div className='flex flex-col gap-3'>
            <Label>Local Time</Label>
            <p className='min-w-24 text-sm tabular-nums'>
              {minute === null
                ? '\u00a0'
                : formatInTimeZone(minute * 60_000, TIME_ZONE, 'hh:mm a zzz')}
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <Label>Socials</Label>
          <div className='flex flex-row gap-8'>
            {socials.map(({ name, link }) => (
              <MagneticComponent key={name} modifier={{ x: 0.3, y: 0.3 }}>
                <a
                  className='text-sm underline-offset-8 transition-colors hover:text-primary hover:underline'
                  href={link}
                  target='_blank'
                  rel='noreferrer'
                >
                  {name}
                </a>
              </MagneticComponent>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
