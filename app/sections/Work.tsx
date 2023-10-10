import { motion } from 'framer-motion';
import { VerticalTimeline } from 'react-vertical-timeline-component';

import SectionWrapper from '@/hoc/SectionWrapper';
import { styles } from '@/lib/styles';
import { textVariant } from '@/lib/transitions';

import { ExperienceCard } from '@/components/ExperienceCard';

import { experiences } from '@/constants';

const Work = () => {
  return (
    <div className='flex flex-col gap-y-8'>
      <motion.h2
        variants={textVariant()}
        className={`uppercase ${styles.sectionHead}`}
      >
        Work Experience
      </motion.h2>
      <VerticalTimeline animate={false}>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default SectionWrapper(Work, 'work');
