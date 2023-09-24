'use client';

import { AnimatePresence, motion, Variants } from 'framer-motion';

import useNavModal from '@/hooks/useNavModal';

import { NavLink } from './NavLink';
import { Separator } from '@/components/ui/separator';
import MagneticComponent from '@/hoc/MagneticComponent';
import { Curve } from '@/components/navbar/Curve';

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

  const menuSlide: Variants = {
    initial: { x: 'calc(100% + 200px)' },
    enter: { x: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
    exit: {
      x: 'calc(100% + 200px)',
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
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
            <div
              className='box-border h-full w-[400px] bg-slate-900 xl:w-[700px] 
              flex flex-col justify-between'
            >
              <div
                className='flex flex-col justify-around h-[70%] xl:h-[80%] my-auto 
                w-3/4 xl:w-3/5 mx-auto'
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
              </div>
            </div>
            <Curve />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
