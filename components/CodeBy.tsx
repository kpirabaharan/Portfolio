'use client';

import { useState } from 'react';
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
      className='flex gap-x-1 group cursor-pointer'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p className='font-light group-hover:rotate-full transition duration-700'>
        &copy;{' '}
      </p>
      <motion.div
        initial='closed'
        animate={animate}
        variants={{
          open: { width: '180px' },
          closed: { width: '114px' },
        }}
        transition={transition}
        className='overflow-hidden text-clip whitespace-nowrap relative'
      >
        <motion.p
          initial='closed'
          animate={animate}
          variants={{
            open: { x: -66 },
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
