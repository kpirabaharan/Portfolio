'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import SectionWrapper from '@/hoc/SectionWrapper';
import { textVariant } from '@/lib/transitions';
import { styles } from '@/lib/styles';
import useSplash from '@/hooks/useSplash';

import ProjectTile from '@/components/ProjectTile';
import { ProjectModal } from '@/components/ProjectModal';
import { MagneticButton } from '@/components/MagneticButton';

import { Separator } from '@/components/ui/separator';

import { featuredProjects } from '@/constants';

const Projects = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const { startSplash } = useSplash();

  return (
    <div className='flex flex-col gap-y-8'>
      <motion.h2
        variants={textVariant()}
        className={`${styles.sectionHead} uppercase`}
      >
        Featured Projects
      </motion.h2>

      <div
        className='grid grid-cols-1 sm:grid-cols-2 gap-y-8 lg:gap-y-0 lg:flex 
        lg:flex-col lg:justify-center lg:items-center w-full'
      >
        <Separator className='hidden lg:flex' />
        {featuredProjects.map((project, index) => {
          const { title, type, image, color } = project;
          return (
            <ProjectTile
              key={index}
              index={index}
              title={title}
              image={image}
              color={color}
              type={type}
              setModal={setModal}
            />
          );
        })}
        <ProjectModal modal={modal} projects={featuredProjects} />
      </div>
      <div className='w-full flex justify-center mt-4'>
        <MagneticButton size='wide' onClick={() => startSplash('/projects')}>
          <p className='text-lg lg:text-xl text-primary-foreground'>
            More Projects
          </p>
        </MagneticButton>
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');
