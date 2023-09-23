'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu } from 'lucide-react';

import { NavbarSheet } from '@/components/navbar/NavbarSheet';

import { MagneticButton } from '../MagneticButton';

export const FloatingNavButton = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 300) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <NavbarSheet>
      <AnimatePresence>
        {scrolled && (
          <motion.div
            className='z-40'
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              transition: { ease: 'anticipate', duration: 0.5 },
            }}
            exit={{
              scale: 0,
              transition: { ease: 'circInOut', duration: 0.2 },
            }}
          >
            <MagneticButton>
              <Menu className='h-6 w-6 md:h-8 md:w-8 xl:h-10 xl:w-10' />
            </MagneticButton>
          </motion.div>
        )}
      </AnimatePresence>
    </NavbarSheet>
  );
};
