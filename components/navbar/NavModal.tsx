'use client';

import { useRouter, usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

import useNavModal from '@/hooks/useNavModal';
import useWindowSize from '@/hooks/useWindowSize';
import {
  menuSlide,
  linkVariants,
  widthVariants,
  heightVariants,
  pathAnimation,
} from '@/lib/animations';

import MagneticComponent from '@/hoc/MagneticComponent';
import { NavLink } from '@/components/navbar/NavLink';

import { Separator } from '@/components/ui/separator';

import { navLinks, socials } from '@/constants';

export const NavModal = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [width, _] = useWindowSize();
  const { isOpen, onClose } = useNavModal();

  const animate = width > 1280 ? 'xl' : width > 1024 ? 'lg' : 'base';

  // Curve
  const initialPath = `M200 0 L200 ${window.innerHeight} Q-200 ${
    window.innerHeight / 2
  } 200 0`;
  const targetPath = `M200 0 L200 ${window.innerHeight} Q200 ${
    window.innerHeight / 2
  } 200 0`;

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
                  {navLinks.map((link, index) => {
                    const isPath = pathname === link.href;
                    return (
                      <NavLink
                        className='cursor-pointer w-fit py-2'
                        key={index}
                        index={index}
                        isPath={isPath}
                        onClick={
                          link.href === '/'
                            ? () => {
                                window.location.assign('/');
                                onClose();
                              }
                            : () => {
                                router.push(link.href);
                                onClose();
                              }
                        }
                        size={width > 1024 ? 'large' : 'small'}
                        side='left'
                      >
                        <motion.a
                          initial='initial'
                          animate={animate}
                          variants={linkVariants(width)}
                          className='text-[2rem] lg-[4rem] xl-[5rem]'
                        >
                          {link.title}
                        </motion.a>
                      </NavLink>
                    );
                  })}
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
            {/* Curve */}
            <svg
              className='absolute top-0 -left-[199px] w-[200px] h-full 
              stroke-none fill-slate-900 pointer-events-none'
            >
              <motion.path
                variants={pathAnimation(initialPath, targetPath)}
                initial='initial'
                animate='enter'
                exit='exit'
              />
            </svg>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
