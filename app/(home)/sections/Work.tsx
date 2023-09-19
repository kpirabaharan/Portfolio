import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import Image from 'next/image';

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { experiences } from '@/constants';

import SectionWrapper from '@/hoc/SectionWrapper';

import { ExperienceType } from '@/types';

const ExperienceCard = ({
  title,
  company_name,
  location,
  icon,
  iconBg,
  date,
  points,
}: ExperienceType) => (
  <VerticalTimelineElement
    contentStyle={{ background: 'hsl(217.2 32.6% 17.5%)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    iconStyle={{ background: iconBg }}
    icon={
      <Image
        src={icon.src}
        fill
        alt={company_name}
        className='w-[80%] h-[80%] object-contain rounded-full'
      />
    }
  >
    <h3 className='text-lg text-white font-semibold'>{title}</h3>
    <h4 className='text-white'>
      {company_name}
      <span className='pl-4'>|</span>
      <span className='pl-4'>{location}</span>
    </h4>

    <p className='text-primary'>{date}</p>
    <ul className='mt-5 list-disc ml-3 space-y-2'>
      {points.map((point, index) => (
        <li
          key={`experience-${index}`}
          className='text-white-100 text-[14px] pl-1 tracking-widers'
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Work = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      initial='hidden'
      ref={ref}
      animate={controls}
      className='mx-auto max-w-7xl w-full sm:px-16 px-6 sm:py-16 py-6'
    >
      <motion.h2
        className='text-xl md:text-2xl lg:text-3xl text-teal-600'
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
      >
        WORK EXPERIENCE
      </motion.h2>
      <VerticalTimeline>
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </VerticalTimeline>
    </motion.div>
  );
};

export default Work;
