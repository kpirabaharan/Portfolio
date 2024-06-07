'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import SectionWrapper from '@/hoc/SectionWrapper';
import useSplash from '@/hooks/useSplash';
import { styles } from '@/lib/styles';
import { textVariant } from '@/lib/transitions';

import { MagneticButton } from '@/components/MagneticButton';
import SkillCard from '@/components/SkillCard';

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
        <div className='flex flex-row items-center justify-between gap-x-8'>
          <p className='max-w-3xl flex-[3] text-base sm:text-lg lg:text-xl'>
            {featuredSkillsText}
          </p>
          <div className='hidden w-full flex-1 justify-center lg:flex'>
            <div>
              <MagneticButton
                size={'round'}
                onClick={() => {
                  startSplash('/skills');
                }}
              >
                <p className='text-lg text-primary-foreground lg:text-xl'>
                  More Skills
                </p>
              </MagneticButton>
            </div>
          </div>
        </div>
       {gl && <div className='flex flex-auto flex-wrap'>
          {featuredTech.map(({ name, icon }, i) => (
            <SkillCard name={name} icon={icon} key={i} />
          ))}
        </div>}
        <div className='flex w-full justify-center lg:hidden'>
          <MagneticButton
            size='wide'
            onClick={() => {
              startSplash('/skills');
            }}
          >
            <p className='text-lg text-primary-foreground lg:text-xl'>
              More Skills
            </p>
          </MagneticButton>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Skills, 'skills');
