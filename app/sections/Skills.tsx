'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import SectionWrapper from '@/hoc/SectionWrapper';
import { styles } from '@/lib/styles';
import { textVariant } from '@/lib/transitions';
import useSplash from '@/hooks/useSplash';

import BallSingle from '@/components/canvas/BallSingle';
import { MagneticButton } from '@/components/MagneticButton';

import { featuredSkillsText, featuredTech } from '@/constants';

const Skills = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { startSplash } = useSplash();

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
      <div className='flex flex-col gap-y-8'>
        <div className='flex flex-row gap-x-8 justify-between items-center'>
          <p className='max-w-3xl leading-8 text-base sm:text-lg md:text-xl flex-[3]'>
            {featuredSkillsText}
          </p>
          <div className='lg:flex hidden w-full justify-center flex-1'>
            <div>
              <MagneticButton
                size='wide'
                onClick={() => startSplash('/skills')}
              >
                <p className='text-lg lg:text-xl text-primary-foreground'>
                  More Skills
                </p>
              </MagneticButton>
            </div>
          </div>
        </div>
        <div className='flex flex-row flex-wrap gap-8'>
          {featuredTech.map((skill, index) =>
            gl ? (
              <div
                key={index}
                className='w-32 h-32 lg:w-48 lg:h-48 flex items-center justify-center'
              >
                <BallSingle index={index} icon={skill.icon.src} />
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
        <div className='w-full flex lg:hidden justify-center'>
          <MagneticButton size='wide' onClick={() => startSplash('/skills')}>
            <p className='text-lg lg:text-xl text-primary-foreground'>
              More Skills
            </p>
          </MagneticButton>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Skills, 'skills');
