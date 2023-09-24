import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import SectionWrapper from '@/hoc/SectionWrapper';
import { styles } from '@/lib/styles';
import { ExperienceType } from '@/types';

import { experiences } from '@/constants';
import { textVariant } from '@/lib/transitions';

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
    className='vertical-timeline-element--work'
    date={date}
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
    <h3 className='vertical-timeline-element-title font-bold text-lg'>
      {title}
    </h3>
    <h4 className='vertical-timeline-element-subtitle'>
      {company_name}
      <span className='pl-4'>|</span>
      <span className='pl-4'>{location}</span>
    </h4>

    <ul className='mt-5 list-disc ml-3 space-y-2'>
      {points.map((point, index) => (
        <li
          key={`experience-${index}`}
          className='text-muted-foreground text-[14px] pl-1 tracking-widers'
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Work = () => {
  return (
    <div className='flex flex-col gap-y-8'>
      <motion.h2 variants={textVariant()} className={styles.sectionHead}>
        WORK EXPERIENCE
      </motion.h2>
      <VerticalTimeline>
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default SectionWrapper(Work, 'work');
