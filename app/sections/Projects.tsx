'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

import SectionWrapper from '@/hoc/SectionWrapper';
import useSplash from '@/hooks/useSplash';
import { styles } from '@/lib/styles';
import { textVariant } from '@/lib/transitions';

import { MagneticButton } from '@/components/MagneticButton';
import { ProjectModal } from '@/components/ProjectModal';
import ProjectTile from '@/components/ProjectTile';

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

      <div className='grid w-full grid-cols-1 gap-y-8 sm:grid-cols-2 lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-y-0'>
        <Separator className='hidden lg:flex' />
        {featuredProjects.map((project, index) => {
          const { title, type, image, color, link } = project;
          return (
            <ProjectTile
              key={index}
              index={index}
              title={title}
              image={image}
              color={color}
              type={type}
              link={link}
              setModal={setModal}
            />
          );
        })}
        <ProjectModal modal={modal} projects={featuredProjects} />
      </div>
      <div className='mt-4 flex w-full justify-center'>
        <MagneticButton size='wide' onClick={() => startSplash('/projects')}>
          <p className='text-lg text-primary-foreground lg:text-xl'>
            More Projects
          </p>
        </MagneticButton>
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');
