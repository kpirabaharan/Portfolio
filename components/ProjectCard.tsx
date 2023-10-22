import React from 'react';

import { ProjectType } from '@/types';
import Image from 'next/image';

interface ProjectCardProps {
  project: ProjectType;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div
      className='bg-slate-900 w-[350px] aspect-square rounded-xl
      flex flex-col justify-between p-4 cursor-pointer relative'
    >
      <div className='relative h-5/6 w-full mx-auto'>
        <Image
          className='object-cover'
          src={project.image.src}
          alt={project.title}
          fill
        />
      </div>
      <h2 className='text-white text-xl'>{project.title}</h2>
      <div
        className='h-full w-full opacity-0 hover:opacity-100 bg-slate-700/75
        absolute top-0 left-0 rounded-xl p-4'
      >
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
