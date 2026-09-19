'use client';

import gsap from 'gsap';
import { motion, type Variants } from 'motion/react';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

import { type FeaturedProjectType } from '@/types';

interface ProjectModalProps {
  modal: { active: boolean; index: number };
  projects: FeaturedProjectType[];
}

const scaleAnimation: Variants = {
  initial: { scale: 0, x: '-50%', y: '-50%' },
  open: {
    scale: 1,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4, ease: [0.33, 0, 0.67, 0] },
  },
};

// Desktop-only preview that trails the cursor over the featured project list.
export const ProjectModal = ({ modal, projects }: ProjectModalProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorLabelRef = useRef<HTMLDivElement>(null);
  const { active, index } = modal;

  useEffect(() => {
    const follow = (el: HTMLElement | null, duration: number) => ({
      x: gsap.quickTo(el, 'left', { duration, ease: 'power3' }),
      y: gsap.quickTo(el, 'top', { duration, ease: 'power3' }),
    });
    const targets = [
      follow(containerRef.current, 0.8),
      follow(cursorRef.current, 0.5),
      follow(cursorLabelRef.current, 0.45),
    ];

    const moveMouse = (e: MouseEvent) => {
      targets.forEach(({ x, y }) => {
        x(e.pageX);
        y(e.pageY);
      });
    };

    window.addEventListener('mousemove', moveMouse);
    return () => window.removeEventListener('mousemove', moveMouse);
  }, []);

  const state = active ? 'open' : 'closed';

  return (
    <>
      <motion.div
        ref={containerRef}
        variants={scaleAnimation}
        initial='initial'
        animate={state}
        className='pointer-events-none absolute z-20 hidden size-[400px] items-center justify-center overflow-hidden rounded-xl lg:flex xl:size-[450px]'
      >
        <div
          style={{
            top: index * -100 + '%',
            transition: 'top 0.5s cubic-bezier(0.76, 0, 0.24, 1)',
          }}
          className='absolute size-full'
        >
          {projects.map(({ title, image, color }) => (
            <div
              key={title}
              style={{ backgroundColor: color }}
              className='flex h-full items-center justify-center'
            >
              <div className='relative h-[75%] w-[80%]'>
                <Image
                  className='rounded-lg object-cover'
                  src={image}
                  alt={title}
                  fill
                  sizes='360px'
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        ref={cursorRef}
        variants={scaleAnimation}
        initial='initial'
        animate={state}
        className='pointer-events-none absolute z-20 hidden size-20 rounded-full bg-brand lg:flex'
      />
      <motion.div
        ref={cursorLabelRef}
        variants={scaleAnimation}
        initial='initial'
        animate={state}
        className='pointer-events-none absolute z-20 hidden text-sm font-medium text-brand-foreground lg:flex'
      >
        View
      </motion.div>
    </>
  );
};
