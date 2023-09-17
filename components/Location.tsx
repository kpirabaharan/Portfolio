'use client';

import Lottie from 'lottie-react';

import animationData from '@/assets/globe.json';

const Location = () => {
  return (
    <div className='pl-8 md:pl-12 pr-4 py-4 bg-gray-900 flex items-center rounded-e-full gap-x-12'>
      <p className='w-12 font-extralight leading-[18px]'>Located in Ontario</p>
      <div
        className='bg-gray-400 rounded-full flex items-center justify-center 
        h-16 w-16 p-3'
      >
        <Lottie animationData={animationData} />
      </div>
    </div>
  );
};

export default Location;
