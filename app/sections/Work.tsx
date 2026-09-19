import SectionWrapper from '@/hoc/SectionWrapper';

import { ExperienceCard } from '@/components/ExperienceCard';
import { SectionHeading } from '@/components/SectionHeading';

import { experiences } from '@/constants';

const Work = () => {
  return (
    <>
      <SectionHeading index='02' title='Work Experience' />
      <ol className='relative mt-10 ml-1 border-l border-border'>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </ol>
    </>
  );
};

export default SectionWrapper(Work, 'work');
