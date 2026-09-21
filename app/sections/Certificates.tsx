import SectionWrapper from '@/hoc/SectionWrapper';

import { CredentialCard } from '@/components/CredentialCard';
import { SectionHeading } from '@/components/SectionHeading';

import { certificates } from '@/constants';

const Certificates = () => {
  return (
    <>
      <SectionHeading index='04' title='Certifications' />
      <div className='mt-10 grid gap-6 lg:grid-cols-2'>
        {certificates.map(({ title, issuer, date, image, link }, index) => (
          <CredentialCard
            key={title}
            index={index}
            title={title}
            subtitle={issuer}
            date={date}
            image={image}
            link={link}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certificates, 'certifications');
