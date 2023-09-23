'use client';

import { AnimatePresence, motion, Variants } from 'framer-motion';

import useNavModal from '@/hooks/useNavModal';

import { NavLink } from './NavLink';
import { Separator } from '@/components/ui/separator';

const navLinks = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '#about',
  },
  {
    title: 'Skills',
    href: '#skills',
  },
  {
    title: 'Projects',
    href: '#projects',
  },
  {
    title: 'Contact',
    href: '#contact',
  },
];

const menuSlide: Variants = {
  initial: { x: '100%' },
  enter: { x: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: { x: '100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
};

export const NavModal = () => {
  const { isOpen, onClose } = useNavModal();

  return (
    <AnimatePresence mode='wait'>
      {isOpen && (
        <motion.div
          onClick={onClose}
          className='fixed h-screen z-10 w-full backdrop-blur-sm'
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            variants={menuSlide}
            initial='initial'
            animate='enter'
            exit='exit'
            className='fixed h-screen z-20 bg-slate-900 top-0 right-0'
          >
            <div className='box-border h-full w-[350px] xl:w-[500px] flex flex-col justify-between'>
              <div className='flex flex-col gap-y-4 mt-20 w-1/2 mx-auto'>
                <div className='mt-2 md-height:mt-12 mb-8 uppercase flex flex-col gap-y-4'>
                  <p className='text-xs text-muted-foreground'>Navigation</p>
                  <Separator className='bg-muted-foreground' />
                </div>

                {navLinks.map((nav, index) => (
                  <NavLink
                    className='cursor-pointer w-fit'
                    key={index}
                    index={index}
                    size='large'
                    side='left'
                  >
                    <a
                      href={nav.href}
                      onClick={onClose}
                      className='text-4xl md-height:xl:text-6xl'
                    >
                      {nav.title}
                    </a>
                  </NavLink>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
