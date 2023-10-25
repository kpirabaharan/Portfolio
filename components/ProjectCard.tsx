import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import {
  GithubIcon,
  ExternalLinkIcon,
  MoreVerticalIcon,
  XIcon,
} from 'lucide-react';

import { ProjectType } from '@/types';
import useSplash from '@/hooks/useSplash';
import useMediaQuery from '@/hooks/useMediaQuery';

import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  project: ProjectType;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const isSmallScreen = useMediaQuery('(min-width: 640px)');
  const { startSplash } = useSplash();

  useEffect(() => {
    if (isSmallScreen) {
      setIsHovered(false);
    }
  }, [isSmallScreen]);

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
      className='bg-slate-900 w-full sm:w-[350px] aspect-[8/6] sm:aspect-square 
      rounded-xl flex flex-col justify-between p-4 relative overflow-hidden'
      onMouseEnter={isSmallScreen ? () => setIsHovered(true) : () => {}}
      onMouseLeave={isSmallScreen ? () => setIsHovered(false) : () => {}}
    >
      <div className='relative flex-1 w-full mx-auto'>
        <Image
          className='object-cover'
          src={project.image.src}
          alt={project.title}
          fill
        />
      </div>

      <div className='flex flex-row justify-between items-center pt-4'>
        <h2 className='text-white text-xl'>{project.title}</h2>
        <Button
          className='flex sm:hidden cursor-pointer pointer-events-auto'
          size={'icon'}
          onClick={() => setIsHovered(true)}
        >
          <MoreVerticalIcon className='' />
        </Button>
      </div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            variants={buttonHover}
            initial={'initial'}
            animate={'enter'}
            exit={'exit'}
            className='h-full w-full bg-teal-700/90 absolute top-0 left-0
            rounded-xl p-4 flex flex-col items-center text-center justify-between'
          >
            <Button
              className='flex sm:hidden absolute top-4 right-4'
              size={'icon'}
              onClick={() => setIsHovered(false)}
            >
              <XIcon />
            </Button>

            <h2 className='text-lg font-bold px-10 py-2'>
              {project.type.join(' + ')}
            </h2>

            <p className='text-base sm:text-lg my-auto  sm:pt-0'>
              {project.description}
            </p>

            <div
              className='bg-teal-900 rounded-2xl py-2 px-4 sm:p-4
              flex items-center justify-between w-full'
            >
              {project.github ? (
                <Link
                  href={project.github}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Button size={'icon'}>
                    <GithubIcon />
                  </Button>
                </Link>
              ) : (
                <div className='h-10 w-10'></div>
              )}
              {project.link ? (
                <p
                  className='underline cursor-pointer'
                  onClick={() => {
                    startSplash(project.link!);
                  }}
                >
                  {project.title}
                </p>
              ) : (
                <p>{project.title}</p>
              )}
              {project.website ? (
                <Link
                  href={project.website}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Button size={'icon'}>
                    <ExternalLinkIcon />
                  </Button>
                </Link>
              ) : (
                <div className='h-10 w-10'></div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectCard;
