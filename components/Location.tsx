import Lottie from 'lottie-react';

import animationData from '@/assets/globe.json';

export const Location = () => {
  return (
    <div
      className='pl-4 md:pl-8 pr-2 md:pr-4 py-2 md:py-3 bg-background flex 
      items-center rounded-e-full gap-x-2 md:gap-x-8'
    >
      <p className='w-20 font-light leading-[18px] text-sm md:text-base'>
        Located in Ontario, Canada
      </p>
      <div
        className='bg-muted rounded-full flex items-center justify-center 
        h-16 w-16 p-3'
      >
        <Lottie animationData={animationData} />
      </div>
    </div>
  );
};
