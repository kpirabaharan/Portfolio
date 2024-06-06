'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export const CodeBy = () => {
  const [isHovered, setIsHovered] = useState(false);

  const animate = isHovered ? 'open' : 'closed';

  const transition = {
    duration: 0.5,
    delay: 0.1,
  };

  return (
    <div
      className='group flex cursor-pointer gap-x-1 p-3'
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      onClick={() => {
        window.location.assign('/');
      }}
    >
      <motion.div
        initial='closed'
        animate={animate}
        variants={{
          open: { width: '205px' },
          closed: { width: '151px' },
        }}
        transition={transition}
        className='relative overflow-hidden text-clip whitespace-nowrap'
      >
        <motion.p
          initial='closed'
          className='text-lg'
          animate={animate}
          variants={{
            open: { x: -95 },
            closed: { x: 0 },
          }}
          transition={transition}
        >
          &copy; Code by Keeshigan Pirabaharan
        </motion.p>
      </motion.div>
    </div>
  );
};
