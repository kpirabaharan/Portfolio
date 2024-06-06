'use client';

import { AnimatePresence, motion, type Variants } from 'framer-motion';
import { useEffect, useState } from 'react';

import MagneticComponent from '@/hoc/MagneticComponent';
import useNavModal from '@/hooks/useNavModal';

const FloatingNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { isOpen, onOpen, onClose } = useNavModal();

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

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const css = `before:block before:h-[2px] before:w-2/5 before:m-auto before:bg-slate-900 
    before:relative before:transition before:duration-300 after:block 
    after:h-[2px] after:w-2/5 after:m-auto after:bg-slate-900 after:relative 
    after:transition after:duration-300 before:top-[5px] after:-top-[5px] 
    content-none`;

  const buttonHover: Variants = {
    initial: { y: '100%' },
    enter: {
      y: 0,
      transition: { duration: 0.3, delay: 0.1 },
    },
    exit: {
      y: '-100%',
      transition: { ease: [0.11, 0, 0.5, 0], duration: 0.2, delay: 0.1 },
    },
  };

  return (
    <AnimatePresence>
      {((isScrolled && !isOpen) || isOpen) && (
        <MagneticComponent
          className='fixed right-0 z-30 m-6 cursor-pointer rounded-full md-height:m-10'
          modifier={{ x: 0.4, y: 0.4 }}
        >
          <motion.div
            onClick={isOpen ? onClose : onOpen}
            variants={floatingNavVariants}
            initial='initial'
            animate='enter'
            exit='exit'
            whileHover={{ scale: 1.15 }}
            className='relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-white md-height:xl:h-24 md-height:xl:w-24'
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          >
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  className='pointer-events-none absolute left-0 top-0 h-full w-full rounded-full bg-teal-600'
                  variants={buttonHover}
                  initial={'initial'}
                  animate={'enter'}
                  exit={'exit'}
                />
              )}
            </AnimatePresence>
            <MagneticComponent
              className='absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-full'
              modifier={{ x: 0.3, y: 0.3 }}
            >
              <div
                className={`w-full ${css} ${
                  isOpen &&
                  'before:top-px before:-rotate-45 after:-top-px after:rotate-45'
                }`}
              />
            </MagneticComponent>
          </motion.div>
        </MagneticComponent>
      )}
    </AnimatePresence>
  );
};

export default FloatingNav;
