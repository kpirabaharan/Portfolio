'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

import useNavModal from '@/hooks/useNavModal';
import useSplash from '@/hooks/useSplash';
import useWindowSize from '@/hooks/useWindowSize';
import {
  heightVariants,
  linkVariants,
  menuSlide,
  pathAnimation,
  widthVariants,
} from '@/lib/animations';

import { NavLink } from '@/app/components/navbar/NavLink';
import MagneticComponent from '@/hoc/MagneticComponent';

import { Separator } from '@/components/ui/separator';

import { navLinks, socials } from '@/constants';

export const NavModal = () => {
  const pathname = usePathname();
  const [width] = useWindowSize();
  const { isOpen, onClose } = useNavModal();
  const { startSplash } = useSplash();

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
          className='fixed z-20 h-screen w-full overflow-hidden transition duration-500'
        >
          <motion.div
            onClick={e => {
              e.stopPropagation();
            }}
            variants={menuSlide}
            initial='initial'
            animate='enter'
            exit='exit'
            className='fixed right-0 top-0 z-20 h-screen'
          >
            <motion.div
              animate={animate}
              variants={widthVariants}
              className='box-border flex h-full flex-col justify-around bg-slate-900'
            >
              <motion.div
                animate={animate}
                variants={heightVariants}
                className='mx-auto my-auto flex min-h-[500px] w-3/4 flex-col justify-around xl:w-3/5'
              >
                <div className='flex flex-col gap-y-4 uppercase'>
                  <p className='text-xs text-muted-foreground'>Navigation</p>
                  <Separator className='bg-muted-foreground' />
                </div>

                <div className='flex flex-col gap-y-2'>
                  {navLinks.map((link, index) => {
                    const isPath = pathname === link.href;
                    const { title, href } = link;
                    return (
                      <NavLink
                        className='w-fit cursor-pointer py-2'
                        key={index}
                        index={index}
                        isPath={isPath}
                        onClick={() => {
                          onClose();
                          if (pathname === href) {
                            window.location.assign(href);
                          } else {
                            startSplash(href);
                          }
                        }}
                        size={width > 1024 ? 'large' : 'small'}
                        side='left'
                      >
                        <motion.p
                          initial='initial'
                          animate={animate}
                          variants={linkVariants(width)}
                          className='lg-[4rem] xl-[5rem] text-[2rem]'
                        >
                          {title}
                        </motion.p>
                      </NavLink>
                    );
                  })}
                </div>
                <div className='mt-4 flex flex-col gap-y-4'>
                  <p className='text-xs uppercase text-muted-foreground'>
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
                            className='font-light underline-offset-8 hover:underline'
                            href={link}
                            target='_blank'
                            rel='noreferrer'
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
            <svg className='pointer-events-none absolute -left-[199px] top-0 h-full w-[200px] fill-slate-900 stroke-none'>
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
