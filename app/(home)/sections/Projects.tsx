import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

import SectionWrapper from '@/hoc/SectionWrapper';
import { textVariant } from '@/lib/transitions';
import { styles } from '@/lib/styles';

import { Project } from '@/components/Project';
import { ProjectModal } from '@/components/ProjectModal';

import { Separator } from '@/components/ui/separator';

import { featuredProjects } from '@/constants';

const Projects = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const projectsRef = useRef<HTMLDivElement>(null!);

  return (
    <div className='flex flex-col gap-y-8'>
      <motion.h2 variants={textVariant()} className={styles.sectionHead}>
        FEATURED PROJECTS
      </motion.h2>

      <div ref={projectsRef} className='flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center w-full'>
          <Separator />
          {featuredProjects.map((project, index) => {
            const { title, type } = project;
            return (
              <Project
                key={index}
                index={index}
                title={title}
                type={type}
                setModal={setModal}
              />
            );
          })}
        </div>
        <ProjectModal
          modal={modal}
          projects={featuredProjects}
          windowRef={projectsRef}
        />
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');
