'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import gsap from 'gsap';

import { FeaturedProjectType } from '@/types';

interface ProjectModalProps {
  modal: { active: boolean; index: number };
  projects: FeaturedProjectType[];
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

export const ProjectModal = ({ modal, projects }: ProjectModalProps) => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const cursorRef = useRef<HTMLDivElement>(null!);
  const cursorLabelRef = useRef<HTMLDivElement>(null!);
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

    const moveCursorDivX = gsap.quickTo(cursorRef.current, 'left', {
      duration: 0.5,
      ease: 'power3',
    });
    const moveCursorDivY = gsap.quickTo(cursorRef.current, 'top', {
      duration: 0.5,
      ease: 'power3',
    });

    const moveCursorX = gsap.quickTo(cursorLabelRef.current, 'left', {
      duration: 0.45,
      ease: 'power3',
    });
    const moveCursorY = gsap.quickTo(cursorLabelRef.current, 'top', {
      duration: 0.45,
      ease: 'power3',
    });

    const moveMouse = (e: MouseEvent) => {
      const { pageX, pageY } = e;
      moveContainerX(pageX);
      moveContainerY(pageY);
      moveCursorDivX(pageX);
      moveCursorDivY(pageY);
      moveCursorX(pageX);
      moveCursorY(pageY);
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
        pointer-events-none flex justify-center items-center'
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

      <motion.div
        ref={cursorRef}
        variants={scaleAnimation}
        initial={'initial'}
        animate={active ? 'open' : 'closed'}
        className='h-20 w-20 bg-blue-700 rounded-full absolute 
        pointer-events-none flex items-center justify-center'
      ></motion.div>
      <motion.div
        className='absolute pointer-events-none flex items-center justify-center'
        ref={cursorLabelRef}
        variants={scaleAnimation}
        initial={'initial'}
        animate={active ? 'open' : 'closed'}
      >
        View
      </motion.div>
    </>
  );
};
