'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { AiFillStar } from 'react-icons/ai';

import { techStack } from '@/constants';

import BallCanvas from '@/components/canvas/Ball';
import SkillCard from '@/components/SkillCard';

const NewSkills = () => {
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const variants = (delay: number): Variants => {
    return {
      initial: { x: -1 * (ref.current?.clientWidth || 1) },
      animate: {
        x: 0,
        transition: { duration: 0.7, delay, ease: [0.76, 0, 0.24, 1] },
      },
      exit: {
        x: ref.current?.clientWidth || 1,
        transition: { duration: 0.7, delay, ease: [0.76, 0, 0.24, 1] },
      },
    };
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const canvas = document.createElement('canvas');
  let gl: WebGLRenderingContext | null;
  try {
    gl =
      (canvas.getContext('webgl') as WebGLRenderingContext) ||
      (canvas.getContext('experimental-webgl') as WebGLRenderingContext);
  } catch (err) {
    gl = null;
  }

  return (
    <div className='h-full mt-8 text-center flex flex-col gap-y-8'>
      {techStack.map((stack, index) => (
        <div className='flex flex-col gap-y-8 items-center' key={index}>
          <h2>{stack.title}</h2>
          <p className='max-w-3xl'>{stack.description}</p>
          <div
            className='w-full flex flex-row flex-wrap gap-4 items-center 
                justify-items-center justify-center'
          >
            {stack.tech.map((skill, index) => (
              <div
                key={index}
                className='w-24 h-24 lg:w-32 lg:h-36 flex flex-col items-center'
              >
                <div className='w-full h-[80%] flex items-center justify-center'>
                  {gl ? (
                    <BallCanvas icon={skill.icon.src} />
                  ) : (
                    <div className='w-[75%] h-[80%] relative'>
                      <Image
                        className='object-contain'
                        src={skill.icon.src}
                        alt={skill.name}
                        fill
                      />
                    </div>
                  )}
                </div>
                <p className='text-lg h-[20%] leading-5'>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewSkills;