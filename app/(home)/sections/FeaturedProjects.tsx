import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

import SectionWrapper from '@/hoc/SectionWrapper';
import { useMousePosition } from '@/hooks/useMousePosition';
import { textVariant } from '@/lib/transitions';
import { styles } from '@/lib/styles';
import { FeaturedProjectType } from '@/types';

import { Separator } from '@/components/ui/separator';

import { featuredProjects } from '@/constants';

const ProjectCard = ({
  name,
  link,
  type,
  currentIndex,
  setCurrentIndex,
  setLastIndex,
}: FeaturedProjectType & {
  currentIndex: number;
  setCurrentIndex: (id: number) => void;
  setLastIndex: (id: number) => void;
}) => {
  const router = useRouter();

  return (
    <motion.div
      className='py-16 px-8 flex flex-row items-center justify-between 
      cursor-pointer group relative'
      onClick={() => router.push(link)}
    >
      <h3 className='text-3xl lg:text-4xl xl:text-6xl'>{name}</h3>
      <p className='text-lg xl:text-xl font-light text-muted-foreground'>
        {type}
      </p>
      <div
        className='absolute h-1/2 top-0 left-0 w-full'
        onMouseEnter={() => {
          setLastIndex(currentIndex - 1);
          setCurrentIndex(
            featuredProjects.findIndex((project) => project.name === name),
          );
        }}
        onMouseLeave={() => {
          setLastIndex(currentIndex);
          setCurrentIndex(-1);
        }}
      />
      <div
        className='absolute h-1/2 bottom-0 left-0 w-full'
        onMouseEnter={() => {
          setLastIndex(currentIndex);
          setCurrentIndex(
            featuredProjects.findIndex((project) => project.name === name),
          );
        }}
        onMouseLeave={() => {
          setLastIndex(currentIndex);
          setCurrentIndex(-1);
        }}
      />
    </motion.div>
  );
};

const HoveredCard = ({
  name,
  image,
  initial,
  exit,
}: {
  name: string;
  image: StaticImageData;
  initial: { y: string | number };
  exit: { y: string | number };
}) => {
  const mousePosition = useMousePosition(100);

  return (
    <motion.div
      style={{
        left: mousePosition.x,
        top: mousePosition.y,
      }}
      className={`absolute h-96 w-[28rem] z-20 bg-secondary flex items-center 
      justify-center overflow-hidden pointer-events-none`}
      initial={{ scale: 0, x: '-50%', y: '-50%' }}
      animate={{ scale: 1, transition: { duration: 0.5, delay: 0.1 } }}
      exit={{ scale: 0, transition: { duration: 0.2 } }}
    >
      <AnimatePresence>
        <motion.div
          key={name}
          initial={initial}
          animate={{
            y: 0,
            transition: { duration: 0.5, delay: 0.1 },
          }}
          exit={{ ...exit, transition: { duration: 0.5, delay: 0.1 } }}
          className='absolute w-full h-full flex justify-center items-center'
        >
          <div className='w-[90%] h-[70%] relative'>
            <Image
              src={image.src}
              alt={name}
              fill
              className='object-cover object-center rounded-lg'
            />
            <div
              className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
              bg-muted-foreground h-24 w-24 rounded-full flex items-center justify-center'
            >
              View
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

const FeaturedProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [lastIndex, setLastIndex] = useState(-1);

  const up = { y: '100%' };
  const down = { y: '-100%' };

  return (
    <motion.div variants={textVariant()}>
      <h2 className={styles.sectionHead}>FEATURED PROJECTS</h2>
      <ul className='list-disc flex flex-col mt-8'>
        <Separator />
        {featuredProjects.map((project, ind) => (
          <div key={ind}>
            <ProjectCard
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
              setLastIndex={setLastIndex}
              {...project}
            />
            <Separator />
          </div>
        ))}
      </ul>
      <AnimatePresence>
        {currentIndex !== -1 && (
          <HoveredCard
            initial={lastIndex < currentIndex ? up : down}
            exit={lastIndex < currentIndex ? up : down}
            {...featuredProjects[currentIndex]}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SectionWrapper(FeaturedProjects, 'projects', 'max-w-8xl');
