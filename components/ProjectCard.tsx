import { useState } from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { GithubIcon, ExternalLinkIcon } from 'lucide-react';

import { ProjectType } from '@/types';
import Image from 'next/image';
import { Button } from './ui/button';

interface ProjectCardProps {
  project: ProjectType;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonHover: Variants = {
    initial: { y: '100%' },
    enter: {
      y: 0,
      transition: { ease: [0.76, 0, 0.24, 1], duration: 0.5, delay: 0.1 },
    },
    exit: {
      y: '-100%',
      transition: { ease: [0.76, 0, 0.24, 1], duration: 0.5, delay: 0.1 },
    },
  };

  return (
    <div
      className='bg-slate-900 w-[350px] aspect-square rounded-xl
      flex flex-col justify-between p-4 cursor-pointer relative overflow-hidden'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
      <AnimatePresence>
        {isHovered && (
          <motion.div
            variants={buttonHover}
            initial={'initial'}
            animate={'enter'}
            exit={'exit'}
            className='h-full w-full bg-teal-700/90 absolute top-0 left-0 
            rounded-xl p-4 flex flex-col items-center text-center justify-between
            pointer-events-none'
          >
            <p className='text-lg my-auto'>{project.description}</p>
            <div
              className='bg-teal-900 rounded-2xl p-4 flex items-center 
              justify-between w-full'
            >
              <Button size={'icon'}>
                <GithubIcon />
              </Button>
              <p>{project.title}</p>
              <Button size={'icon'}>
                <ExternalLinkIcon />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectCard;
