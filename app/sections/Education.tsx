import SectionWrapper from '@/hoc/SectionWrapper';

import { CredentialCard } from '@/components/CredentialCard';
import { SectionHeading } from '@/components/SectionHeading';

import { western } from '@/assets';

const Education = () => {
  return (
    <>
      <SectionHeading index='03' title='Education' />
      <div className='mt-10'>
        <CredentialCard
          title={
            <>
              Western University{' '}
              <span className='font-normal text-muted-foreground'>
                — London, ON
              </span>
            </>
          }
          subtitle='B.E.Sc Mechatronics Engineering with distinction'
          date='2017 – 2022'
          image={western}
        />
      </div>
    </>
  );
};

export default SectionWrapper(Education, 'education');
