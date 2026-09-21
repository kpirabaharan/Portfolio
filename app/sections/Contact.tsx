import SectionWrapper from '@/hoc/SectionWrapper';

import ContactCard from '@/components/ContactCard';
import { SectionHeading } from '@/components/SectionHeading';

const Contact = () => {
  return (
    <>
      <SectionHeading index='07' title='Get In Touch' />
      <ContactCard className='mt-10' />
    </>
  );
};

export default SectionWrapper(Contact, 'contact');
