'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const TranslatingName = () => {
  const firstRef = useRef(null);
  const secondRef = useRef(null);

  let xPercent = 0;
  let direction = 1;

useEffect(() => {
  const 
  
}, []);

  return (
    <div className='relative flex whitespace-nowrap'>
      <p ref={firstRef} className='m-0 text-15xl font-bold'>
        Keeshigan Pirabaharan -{' '}
      </p>
      <p ref={secondRef} className='m-0 text-15xl font-bold absolute left-full'>
        Keeshigan Pirabaharan -{' '}
      </p>
    </div>
  );
};
