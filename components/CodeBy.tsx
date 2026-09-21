'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import useSplash from '@/hooks/useSplash';
import { isModifiedClick } from '@/lib/utils';

export const CodeBy = () => {
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();
  const { startSplash } = useSplash();

  const animate = isHovered ? 'open' : 'closed';

  const transition = {
    duration: 0.5,
    delay: 0.1,
  };

  return (
    <Link
      href='/'
      className='group flex cursor-pointer gap-x-1 p-3'
      onClick={e => {
        if (isModifiedClick(e)) return;
        e.preventDefault();
        // Same transitions as the navbar: reload on home, splash elsewhere.
        if (pathname === '/') window.location.reload();
        else startSplash('/');
      }}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <motion.div
        initial='closed'
        animate={animate}
        variants={{
          open: { width: '220px' },
          closed: { width: '141px' },
        }}
        transition={transition}
        className='relative overflow-hidden text-clip whitespace-nowrap'
      >
        <motion.p
          initial='closed'
          className='text-lg'
          animate={animate}
          variants={{
            open: { x: -88 },
            closed: { x: 0 },
          }}
          transition={transition}
        >
          &copy; Code by Keeshigan Pirabaharan
        </motion.p>
      </motion.div>
    </Link>
  );
};
