'use client';

import { AnimatePresence, motion, Variants } from 'framer-motion';

import useNavModal from '@/hooks/useNavModal';
import useWindowSize from '@/hooks/useWindowSize';

import MagneticComponent from '@/hoc/MagneticComponent';
import { NavLink } from '@/components/navbar/NavLink';
import { Curve } from '@/components/navbar/Curve';

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

const socials = [
  { name: 'LinkedIn', link: 'https://linkedin.com/in/kpirabaharan' },
  { name: 'Github', link: 'https://github.com/kpirabaharan' },
  { name: 'Resume', link: './Keeshigan-Pirabaharan-Resume.pdf' },
];

export const NavModal = () => {
  const { isOpen, onClose } = useNavModal();
  const [width, _] = useWindowSize();

  const menuSlide: Variants = {
    initial: { x: 'calc(100% + 200px)' },
    enter: { x: 0, transition: { duration: 0.8 } },
    exit: {
      x: 'calc(100% + 200px)',
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const animate = width > 1280 ? 'xl' : width > 1024 ? 'lg' : 'base';
  const fontS = width > 1280 ? '4rem' : width > 1024 ? '3rem' : '2rem';

  const widthVariants: Variants = {
    xl: {
      width: 700,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    lg: {
      width: 500,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    base: {
      width: 400,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
  };
  const heightVariants: Variants = {
    xl: {
      height: '80%',
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    lg: {
      height: '70%',
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    base: {
      height: '50%',
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
  };
  const linkVariants: Variants = {
    initial: { fontSize: fontS },
    xl: {
      fontSize: fontS,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    lg: {
      fontSize: fontS,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    base: {
      fontSize: fontS,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          onClick={onClose}
          className='fixed h-screen z-10 w-full backdrop-blur-sm transition 
          duration-500 overflow-hidden'
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            variants={menuSlide}
            initial='initial'
            animate='enter'
            exit='exit'
            className='fixed h-screen z-20 top-0 right-0'
          >
            <motion.div
              animate={animate}
              variants={widthVariants}
              className='box-border h-full bg-slate-900 flex flex-col justify-around'
            >
              <motion.div
                animate={animate}
                variants={heightVariants}
                className='flex flex-col justify-around my-auto w-3/4 xl:w-3/5 mx-auto min-h-[500px]'
              >
                <div className='uppercase flex flex-col gap-y-4'>
                  <p className='text-xs text-muted-foreground'>Navigation</p>
                  <Separator className='bg-muted-foreground' />
                </div>

                <div className='flex flex-col gap-y-2'>
                  {navLinks.map((nav, index) => (
                    <NavLink
                      className='cursor-pointer w-fit'
                      key={index}
                      index={index}
                      size={width > 1024 ? 'large' : 'small'}
                      side='left'
                    >
                      <motion.a
                        initial='initial'
                        animate={animate}
                        variants={linkVariants}
                        href={nav.href}
                        onClick={onClose}
                        className='text-[2rem] lg-[4rem] xl-[5rem]'
                      >
                        {nav.title}
                      </motion.a>
                    </NavLink>
                  ))}
                </div>
                <div className='mt-4 flex flex-col gap-y-4'>
                  <p className='uppercase text-xs text-muted-foreground'>
                    Socials
                  </p>
                  <div className='flex flex-row gap-x-4 xl:gap-x-8'>
                    {socials.map((item, index) => {
                      const { name, link } = item;
                      return (
                        <MagneticComponent
                          key={index}
                          modifier={{ x: 0.3, y: 0.3 }}
                        >
                          <a
                            className='font-light cursor-pointer hover:underline
                            underline-offset-8'
                            href={link}
                            target='_blank'
                          >
                            {name}
                          </a>
                        </MagneticComponent>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </motion.div>
            <Curve />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
