'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export const Contact = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 1000) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <AnimatePresence>
      {scrolled && (
        <motion.div
          initial={{ y: 200 }}
          animate={{
            y: 0,
            transition: { ease: 'easeOut', duration: 1 },
          }}
          exit={{
            y: 200,
            transition: { ease: 'easeOut', duration: 0.2 },
          }}
          className='h-full w-full flex flex-col'
        >
          <div className='bg-secondary rounded-t-lg absolute bottom-0 left-8 h-48 w-2' />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
