import { AnimatePresence, Variants, motion } from 'framer-motion';
import {
  ExternalLinkIcon,
  GithubIcon,
  MoreVerticalIcon,
  XIcon,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import useMediaQuery from '@/hooks/useMediaQuery';
import { ProjectType } from '@/types';

import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  project: ProjectType;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isSmallScreen = useMediaQuery('(min-width: 640px)');

  const [xDirection, setXDirection] = useState<'-100%' | '0%' | '100%'>(
    '-100%',
  );
  const [yDirection, setYDirection] = useState<'-100%' | '0%' | '100%'>('0%');

  const handleMouseEnter = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (!ref.current) return;

    setIsHovered(true);

    const direction = getDirection(event, ref.current);
    console.log('direction', direction);
    switch (direction) {
      case 0:
        setXDirection('0%');
        setYDirection('-100%');
        break;
      case 1:
        setXDirection('100%');
        setYDirection('0%');
        break;
      case 2:
        setXDirection('0%');
        setYDirection('100%');
        break;
      case 3:
        setXDirection('-100%');
        setYDirection('0%');
        break;
      default:
        setXDirection('0%');
        setYDirection('-100%');
        break;
    }
  };

  const getDirection = (
    ev: React.MouseEvent<HTMLDivElement, MouseEvent>,
    obj: HTMLElement,
  ) => {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect();
    const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
    const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    return d;
  };

  useEffect(() => {
    if (isSmallScreen) {
      setIsHovered(false);
    }
  }, [isSmallScreen]);

  const buttonHover: Variants = {
    initial: { x: xDirection, y: yDirection },
    enter: {
      x: 0,
      y: 0,
      transition: { ease: [0.76, 0, 0.24, 1], duration: 0.5, delay: 0.1 },
    },
    exit: {
      x:
        xDirection === '100%'
          ? '-100%'
          : xDirection === '-100%'
            ? '100%'
            : '0%',
      y:
        yDirection === '100%'
          ? '-100%'
          : yDirection === '-100%'
            ? '100%'
            : '0%',
      transition: { ease: [0.76, 0, 0.24, 1], duration: 0.5, delay: 0.1 },
    },
  };

  return (
    <div
      ref={ref}
      className='relative flex aspect-[8/6] w-full flex-col justify-between overflow-hidden rounded-xl bg-slate-900 p-4 sm:aspect-square sm:w-[350px]'
      onMouseEnter={isSmallScreen ? handleMouseEnter : () => {}}
      onMouseLeave={isSmallScreen ? () => setIsHovered(false) : () => {}}
    >
      <div className='relative mx-auto w-full flex-1'>
        <Image
          className='object-cover'
          src={project.image.src}
          alt={project.title}
          fill
        />
      </div>

      <div className='flex flex-row items-center justify-between pt-4'>
        <h2 className='text-xl text-white'>{project.title}</h2>
        <Button
          className='pointer-events-auto flex cursor-pointer sm:hidden'
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
            className='absolute left-0 top-0 flex h-full w-full flex-col items-center justify-between rounded-xl bg-teal-700/90 p-4 text-center'
          >
            <Button
              className='absolute right-4 top-4 flex sm:hidden'
              size={'icon'}
              onClick={() => setIsHovered(false)}
            >
              <XIcon />
            </Button>

            <h2 className='px-10 py-2 text-lg font-bold'>
              {project.type.join(' + ')}
            </h2>

            <p className='my-auto text-base sm:pt-0 sm:text-lg'>
              {project.description}
            </p>

            <div className='flex w-full items-center justify-between rounded-2xl bg-teal-900 px-4 py-2 sm:p-4'>
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
              {/* {project.link ? (
                <p
                  className='cursor-pointer underline'
                  onClick={() => {
                    startSplash(project.link!);
                  }}
                >
                  {project.title}
                </p>
              ) : ( */}
              <p>{project.title}</p>
              {/* )} */}
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
