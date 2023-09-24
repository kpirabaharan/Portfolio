import { useState } from 'react';
import { motion } from 'framer-motion';

import SectionWrapper from '@/hoc/SectionWrapper';
import { textVariant } from '@/lib/transitions';
import { styles } from '@/lib/styles';

import { ProjectCard } from '@/components/ProjectCard';
import { ProjectModal } from '@/components/ProjectModal';

import { Separator } from '@/components/ui/separator';

import { featuredProjects } from '@/constants';

const Projects = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <div className='flex flex-col gap-y-8'>
      <motion.h2 variants={textVariant()} className={styles.sectionHead}>
        FEATURED PROJECTS
      </motion.h2>

      <div
        className='grid grid-cols-1 sm:grid-cols-2 gap-y-8 lg:flex flex-col lg:justify-center 
        lg:items-center w-full'
      >
        <Separator className='hidden lg:flex' />
        {featuredProjects.map((project, index) => {
          const { title, type, image, color } = project;
          return (
            <ProjectCard
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
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');
