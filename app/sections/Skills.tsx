'use client';

import { motion, Variants } from 'framer-motion';

import SectionWrapper from '@/hoc/SectionWrapper';
import { styles } from '@/lib/styles';
import { textVariant } from '@/lib/transitions';

import BallCanvas from '@/components/canvas/Ball';

import { featuredSkillsText, featuredTech } from '@/constants';

const Skills = () => {
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
          <div key={index} className='w-24 h-24 lg:h-32 lg:w-32'>
            <BallCanvas icon={skill.icon.src} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Skills, 'skills');
