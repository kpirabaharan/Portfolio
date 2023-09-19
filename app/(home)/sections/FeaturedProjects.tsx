import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import SectionWrapper from '@/hoc/SectionWrapper';
import { useMousePosition } from '@/hooks/useMousePosition';
import { textVariant } from '@/lib/transitions';
import { styles } from '@/lib/styles';
import { FeaturedProjectType } from '@/types';

import { Separator } from '@/components/ui/separator';

import { featuredProjects } from '@/constants';
import Image, { StaticImageData } from 'next/image';

const ProjectCard = ({
  name,
  image,
  link,
  type,
  setHoveredCard,
}: FeaturedProjectType & { setHoveredCard: (id: string) => void }) => {
  return (
    <motion.div
      className='py-16 px-8 flex flex-row items-center justify-between 
      cursor-pointer group relative'
    >
      <h3 className='text-3xl lg:text-5xl xl:text-6xl'>{name}</h3>
      <p className='text-lg lg:text-xl xl:text-2xl font-light text-muted-foreground'>
        {type}
      </p>
      <div
        className='absolute left-0 top-0 w-full h-full z-50'
        onMouseEnter={() => setHoveredCard(name)}
        onMouseLeave={() => setHoveredCard('')}
      />
    </motion.div>
  );
};

const HoveredCard = ({
  name,
  image,
}: {
  name: string;
  image: StaticImageData;
}) => {
  const mousePosition = useMousePosition();
  return (
    <motion.div
      style={{
        left: mousePosition.x,
        top: mousePosition.y,
        transform: 'translateX(100px) translateY(200px)',
      }}
      className='absolute h-96 w-96 z-30 bg-secondary rounded-lg flex items-center 
      justify-center'
      initial={{ scale: 0, x: '-50%', y: '-50%' }}
      animate={{ scale: 1, transition: { duration: 0.5 } }}
      exit={{ scale: 0, transition: { duration: 0.25 } }}
    >
      <div className='w-[80%] h-[60%] relative'>
        <Image
          src={image.src}
          alt={name}
          fill
          className='object-cover object-center'
        />
      </div>
    </motion.div>
  );
};

const FeaturedProjects = () => {
  const [hoveredCard, setHoveredCard] = useState('');

  return (
    <motion.div variants={textVariant()}>
      <h2 className={styles.sectionHead}>FEATURED PROJECTS</h2>
      <ul className='list-disc flex flex-col mt-8'>
        <Separator />
        {featuredProjects.map((project, ind) => (
          <>
            <ProjectCard
              key={ind}
              {...project}
              setHoveredCard={setHoveredCard}
            />
            <Separator />
          </>
        ))}
      </ul>
      <AnimatePresence>
        {hoveredCard !== '' && (
          <HoveredCard
            key={hoveredCard}
            name={hoveredCard}
            image={
              (
                featuredProjects.find(
                  (project) => project.name === hoveredCard,
                ) as FeaturedProjectType
              ).image
            }
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SectionWrapper(FeaturedProjects, 'projects', 'max-w-8xl]');
