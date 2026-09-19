'use client';

import { useState } from 'react';

import SectionWrapper from '@/hoc/SectionWrapper';
import useSplash from '@/hooks/useSplash';

import { MagneticButton } from '@/components/MagneticButton';
import { ProjectModal } from '@/components/ProjectModal';
import ProjectTile from '@/components/ProjectTile';
import { SectionHeading } from '@/components/SectionHeading';
import { Separator } from '@/components/ui/separator';

import { featuredProjects } from '@/constants';

const Projects = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const { startSplash } = useSplash();

  return (
    <>
      <SectionHeading index='06' title='Featured Projects' />
      <div className='mt-10 grid w-full grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:flex lg:flex-col lg:gap-0'>
        <Separator className='hidden lg:block' />
        {featuredProjects.map((project, index) => (
          <ProjectTile
            key={project.title}
            index={index}
            {...project}
            setModal={setModal}
          />
        ))}
        <ProjectModal modal={modal} projects={featuredProjects} />
      </div>
      <div className='mt-14 flex w-full justify-center'>
        <MagneticButton size='wide' onClick={() => startSplash('/projects')}>
          More Projects
        </MagneticButton>
      </div>
    </>
  );
};

export default SectionWrapper(Projects, 'projects');
