import { format } from 'date-fns';

import MagneticComponent from '@/hoc/MagneticComponent';

import { socials } from '@/constants';

interface FooterProps {
  date: Date;
}

const Footer = ({ date }: FooterProps) => {
  return (
    <div
      className={`w-full flex flex-col-reverse sm:flex-row justify-between px-4 sm:px-16 py-6 sm:py-8`}
    >
      <div className='flex flex-row gap-x-12 justify-between sm:justify-start'>
        <div className='flex flex-col gap-y-6'>
          <p className='uppercase text-xs text-muted-foreground'>
            Last Modified
          </p>
          <p className='text-sm'>{format(date, 'MMMM do, yyyy')}</p>
        </div>
        <div className='flex flex-col gap-y-6'>
          <p className='uppercase text-xs text-muted-foreground'>Local Time</p>
          <p className='text-sm'>{format(new Date(), 'hh:mm a O')}</p>
        </div>
      </div>
      <div className='flex flex-col gap-y-6'>
        <p className='uppercase text-xs text-muted-foreground'>Socials</p>
        <div className='flex flex-row gap-x-12'>
          {socials.map((item, index) => {
            const { name, link } = item;
            return (
              <MagneticComponent key={index} modifier={{ x: 0.3, y: 0.3 }}>
                <a
                  className='font-light hover:underline underline-offset-8'
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