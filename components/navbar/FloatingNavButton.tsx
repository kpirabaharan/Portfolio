'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { NavbarSheet } from '@/components/navbar/NavbarSheet';
import FancyButton from '@/components/FancyButton';

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
            <FancyButton />
          </motion.div>
        )}
      </AnimatePresence>
    </NavbarSheet>
  );
};
