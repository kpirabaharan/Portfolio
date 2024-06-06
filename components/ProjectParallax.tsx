'use client';

import { type ProjectType } from '@/types';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const ProjectParallax = ({ projects }: { projects: ProjectType[] }) => {
  const firstRow = projects.slice(0, 4);
  const secondRow = projects.slice(4, 8);
  const thirdRow = projects.slice(8, 13);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig,
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig,
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig,
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig,
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig,
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig,
  );
  return (
    <div
      ref={ref}
      className='relative flex h-[270vh] flex-col self-auto overflow-hidden py-40 antialiased [perspective:1000px] [transform-style:preserve-3d]'
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=''
      >
        <motion.div className='mb-20 flex flex-row-reverse space-x-20 space-x-reverse'>
          {firstRow.map(project => (
            <ProjectCard
              project={project}
              translate={translateX}
              key={project.title}
            />
          ))}
        </motion.div>
        <motion.div className='mb-20 flex flex-row space-x-20'>
          {secondRow.map(project => (
            <ProjectCard
              project={project}
              translate={translateXReverse}
              key={project.title}
            />
          ))}
        </motion.div>
        <motion.div className='flex flex-row-reverse space-x-20 space-x-reverse'>
          {thirdRow.map(project => (
            <ProjectCard
              project={project}
              translate={translateX}
              key={project.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className='relative left-0 top-0 mx-auto w-full max-w-7xl px-4 py-20 md:py-40'>
      <h1 className='text-2xl font-bold dark:text-white md:text-7xl'>
        A Showcase of My Projects
      </h1>
      <p className='mt-8 max-w-2xl text-base dark:text-neutral-200 md:text-xl'>
        I have comepleted projects in various fields such as Full Stack, Mobile,
        Mechatronics, and more. Click on the projects to view more details.
      </p>
    </div>
  );
};

export const ProjectCard = ({
  project,
  translate,
}: {
  project: ProjectType;
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={project.title}
      className='group/project relative h-96 w-[30rem] flex-shrink-0 cursor-pointer'
    >
      {/* {project.link ? (
        <Link
          href={project.link}
          className='block group-hover/project:shadow-2xl'
        >
          <Image
            src={project.image}
            height='600'
            width='600'
            className='absolute inset-0 h-full w-full object-cover object-center'
            alt={project.title}
          />
        </Link>
      ) : (
        <Image
          src={project.image}
          height='600'
          width='600'
          className='absolute inset-0 h-full w-full object-cover object-center'
          alt={project.title}
        />
      )} */}
      <Link
        href={project.github}
        className='block group-hover/project:shadow-2xl'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Image
          src={project.image}
          height='800'
          width='800'
          className='absolute inset-0 h-full w-full object-cover object-center'
          alt={project.title}
        />
      </Link>
      <div className='pointer-events-none absolute inset-0 left-0 top-0 flex h-full w-full flex-col justify-evenly gap-y-4 bg-black text-center text-white opacity-0 group-hover/project:opacity-80'>
        <h1 className='text-2xl font-bold text-white'>{project.title}</h1>
        <p className='text-base text-white'>{project.description}</p>
        <h2 className='text-lg font-semibold text-white'>
          {project.type.join(' + ')}
        </h2>
      </div>
      {/* {project.website && (
        <Link
          className='absolute bottom-6 right-6 opacity-0 group-hover/project:opacity-80'
          href={project.website}
          target='_blank'
          rel='noopener noreferrer'
        >
          <Button size={'icon'}>
            <ExternalLinkIcon />
          </Button>
        </Link>
      )} */}
    </motion.div>
  );
};
