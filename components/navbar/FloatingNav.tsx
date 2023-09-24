'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, Variants, motion } from 'framer-motion';

import useNavModal from '@/hooks/useNavModal';

const floatingNavVariants: Variants = {
  initial: { scale: 0 },
  enter: {
    scale: 1,
    transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] },
  },
  exit: {
    scale: 0,
    transition: { duration: 0.5, ease: [0.36, 0, 0.66, -0.56] },
  },
};

const FloatingNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const { isOpen, onOpen, onClose } = useNavModal();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const css =
    'before:block before:h-[2px] before:w-2/5 before:m-auto before:bg-slate-900 \
    before:relative before:transition before:duration-300 after:block \
    after:h-[2px] after:w-2/5 after:m-auto after:bg-slate-900 after:relative \
    after:transition after:duration-300 before:top-[5px] after:-top-[5px] \
    content-none';

  return (
    <AnimatePresence>
      {((isScrolled && !isOpen) || isOpen) && (
        <motion.div
          onClick={isOpen ? onClose : onOpen}
          variants={floatingNavVariants}
          initial='initial'
          animate='enter'
          exit='exit'
          className='fixed right-0 m-6 md-height:m-10 w-16 md-height:xl:w-24 h-16 md-height:xl:h-24 bg-white rounded-full 
        flex justify-center items-center z-40 cursor-pointer'
        >
          <div
            className={`w-full ${css} ${
              isOpen &&
              'before:top-px after:-top-px before:-rotate-45 after:rotate-45'
            }`}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingNav;
