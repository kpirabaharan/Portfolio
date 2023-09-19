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
  image,
  link,
  type,
  setHoveredCard,
  hoveredCard,
  setLastHoveredCard,
}: FeaturedProjectType & {
  setHoveredCard: (id: string) => void;
  hoveredCard: string;
  setLastHoveredCard: (id: string) => void;
}) => {
  const router = useRouter();

  return (
    <motion.div
      className='py-16 px-8 flex flex-row items-center justify-between 
      cursor-pointer group relative'
    >
      <h3 className='text-3xl lg:text-4xl xl:text-6xl'>{name}</h3>
      <p className='text-lg xl:text-xl font-light text-muted-foreground'>
        {type}
      </p>
      <div
        className='absolute left-0 top-0 w-full h-full z-30'
        onMouseEnter={() => {
          setLastHoveredCard(hoveredCard);
          setHoveredCard(name);
        }}
        onMouseLeave={() => {
          setLastHoveredCard(hoveredCard);
          setHoveredCard('');
        }}
        onClick={() => router.push(link)}
      />
    </motion.div>
  );
};

const HoveredCard = ({
  index,
  hoveredCard,
  lastHoveredCard,
  image,
}: {
  index: number;
  hoveredCard: string;
  lastHoveredCard: string;
  image: StaticImageData;
}) => {
  const mousePosition = useMousePosition();

  return (
    <motion.div
      style={{
        left: mousePosition.x,
        top: mousePosition.y,
      }}
      className={`absolute h-96 w-[28rem] z-20 ${
        index % 2 === 0 ? 'bg-secondary' : 'bg-primary'
      } flex items-center 
      justify-center overflow-hidden`}
      initial={{ scale: 0, x: '-50%', y: '-50%' }}
      animate={{ scale: 1, transition: { duration: 0.5 } }}
      exit={{ scale: 0, transition: { duration: 0.25 } }}
    >
      <motion.div
        key={hoveredCard}
        initial={lastHoveredCard !== '' && { y: '-100%' }}
        animate={
          lastHoveredCard !== '' && {
            y: 0,
            transition: { duration: 0.5 },
          }
        }
        className='w-full h-full flex justify-center items-center'
      >
        <div key={hoveredCard} className='w-[90%] h-[70%] relative'>
          <Image
            src={image.src}
            alt={hoveredCard}
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
    </motion.div>
  );
};

const FeaturedProjects = () => {
  const [hoveredCard, setHoveredCard] = useState('');
  const [lastHoveredCard, setLastHoveredCard] = useState('');

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
              hoveredCard={hoveredCard}
              setLastHoveredCard={setLastHoveredCard}
            />
            <Separator />
          </>
        ))}
      </ul>
      <AnimatePresence>
        {hoveredCard !== '' && (
          <HoveredCard
            index={featuredProjects.findIndex(
              (project) => project.name === hoveredCard,
            )}
            hoveredCard={hoveredCard}
            lastHoveredCard={lastHoveredCard}
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

export default SectionWrapper(FeaturedProjects, 'projects', 'max-w-8xl');
