'use client';

import { MutableRefObject, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

import { FeaturedProjectType } from '@/types';
import Image from 'next/image';

interface ProjectModalProps {
  modal: { active: boolean; index: number };
  projects: FeaturedProjectType[];
  windowRef: MutableRefObject<HTMLDivElement>;
}

const scaleAnimation = {
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

export const ProjectModal = ({
  modal,
  projects,
  windowRef,
}: ProjectModalProps) => {
  const containerRef = useRef(null);
  const { active, index } = modal;

  useEffect(() => {
    const moveContainerX = gsap.quickTo(containerRef.current, 'left', {
      duration: 0.8,
      ease: 'power3',
    });
    const moveContainerY = gsap.quickTo(containerRef.current, 'top', {
      duration: 0.8,
      ease: 'power3',
    });

    const moveMouse = (e: MouseEvent) => {
      const { pageX, pageY } = e;
      moveContainerX(pageX);
      moveContainerY(pageY);
    };

    window.addEventListener('mousemove', moveMouse);
  }, []);

  return (
    <>
      <motion.div
        ref={containerRef}
        variants={scaleAnimation}
        initial={'initial'}
        animate={active ? 'open' : 'closed'}
        className='h-[400px] w-[400px] xl:h-[450px] xl:w-[450px] absolute bg-white overflow-hidden
        pointer-events-none flex justify-center items-center z-30'
      >
        <div
          style={{
            top: index * -100 + '%',
            transition: 'top 0.5s cubic-bezier(0.76, 0, 0.24, 1)',
          }}
          className='h-full w-full absolute'
        >
          {projects.map((project, index) => {
            const { title, image, color } = project;
            return (
              <div
                key={index}
                style={{ backgroundColor: color }}
                className='h-full flex justify-center items-center relative'
              >
                <div className='h-[75%] w-[80%] relative'>
                  <Image
                    className='object-cover rounded-lg'
                    src={image.src}
                    alt={title}
                    fill
                  />
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};
