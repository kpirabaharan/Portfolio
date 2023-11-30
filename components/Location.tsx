import Lottie from 'lottie-react';

import animationData from '@/assets/globe.json';

export const Location = () => {
  return (
    <div
      className='flex items-center gap-x-2 rounded-e-full bg-background py-2 pl-4 pr-2 
      md:gap-x-8 md:py-3 md:pl-8 md:pr-4'
    >
      <p className='w-20 text-sm font-light leading-[18px] md:text-base'>
        Located in Ontario, Canada
      </p>
      <div
        className='flex h-16 w-16 items-center justify-center 
        rounded-full bg-muted p-3'
      >
        <Lottie animationData={animationData} />
      </div>
    </div>
  );
};
