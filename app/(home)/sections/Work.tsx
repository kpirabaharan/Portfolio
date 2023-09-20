import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import SectionWrapper from '@/hoc/SectionWrapper';
import { ExperienceType } from '@/types';

import { experiences } from '@/constants';
import { textVariant } from '@/lib/transitions';
import { styles } from '@/lib/styles';

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
    contentArrowStyle={{ borderRight: '7px solid hsl(217.2 32.6% 15.5%)' }}
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
  return (
    <motion.div variants={textVariant()}>
      <motion.h2
        className={styles.sectionHead}
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

export default SectionWrapper(Work, 'work');
