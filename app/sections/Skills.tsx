'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import SectionWrapper from '@/hoc/SectionWrapper';
import { styles } from '@/lib/styles';
import { textVariant } from '@/lib/transitions';

import BallSingle from '@/components/canvas/BallSingle';

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
      <div className='flex flex-row flex-wrap gap-8'>
        {featuredTech.map((skill, index) =>
          gl ? (
            <div
              key={index}
              className='w-32 h-32 lg:w-48 lg:h-48 flex items-center justify-center'
            >
              <BallSingle icon={skill.icon.src} />
            </div>
          ) : (
            <div
              key={index}
              className='w-20 h-20 lg:w-28 lg:h-28 flex items-center justify-center 
              bg-slate-800 rounded-full'
            >
              <div className='w-[70%] h-[70%] relative'>
                <Image
                  className='object-contain'
                  src={skill.icon.src}
                  alt={skill.name}
                  fill
                />
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default SectionWrapper(Skills, 'skills');
