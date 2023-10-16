'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

import SectionWrapper from '@/hoc/SectionWrapper';
import { styles } from '@/lib/styles';
import { textVariant } from '@/lib/transitions';

import BallCanvas from '@/components/canvas/Ball';

import { featuredSkillsText, featuredTech } from '@/constants';

const Skills = () => {
  const [isMounted, setIsMounted] = useState(false);

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
    <div className='flex flex-col gap-y-8'>
      <motion.h2
        variants={textVariant()}
        className={`uppercase ${styles.sectionHead}`}
      >
        Leading Skills
      </motion.h2>
      <p className='max-w-3xl leading-8 text-base sm:text-lg md:text-xl'>
        {featuredSkillsText}
      </p>
      <div className='flex flex-row gap-x-8'>
        {featuredTech.map((skill, index) => (
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Skills, 'skills');
