'use client';

import { useState } from 'react';
import { redirect } from 'next/navigation';
import { motion } from 'framer-motion';

export const CodeBy = () => {
  const [isHovered, setIsHovered] = useState(false);

  const animate = isHovered ? 'open' : 'closed';

  const transition = {
    duration: 0.5,
    delay: 0.1,
  };

  return (
    <div
      className='flex gap-x-1 group cursor-pointer p-3'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => window.location.assign('/')}
    >
      <p className='font-light group-hover:rotate-full text-lg transition duration-700'>
        &copy;{' '}
      </p>
      <motion.div
        initial='closed'
        animate={animate}
        variants={{
          open: { width: '205px' },
          closed: { width: '130px' },
        }}
        transition={transition}
        className='overflow-hidden text-clip whitespace-nowrap relative'
      >
        <motion.p
          initial='closed'
          className='text-lg'
          animate={animate}
          variants={{
            open: { x: -74 },
            closed: { x: 0 },
          }}
          transition={transition}
        >
          Code by Keeshigan Pirabaharan
        </motion.p>
      </motion.div>
    </div>
  );
};
