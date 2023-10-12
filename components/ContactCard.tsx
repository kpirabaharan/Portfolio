import { PropsWithChildren } from 'react';
import {
  MailIcon,
  PhoneIcon,
  FileTextIcon,
  LinkedinIcon,
  GithubIcon,
  MapPinIcon,
} from 'lucide-react';

import MagneticComponent from '@/hoc/MagneticComponent';

interface ContactLinkProps extends PropsWithChildren {}

const ContactLink = ({ children }: ContactLinkProps) => {
  return (
    <MagneticComponent
      className='flex gap-x-4 items-center w-fit group'
      modifier={{ x: 0.25, y: 0.5 }}
    >
      {children}
    </MagneticComponent>
  );
};

const ContactCard = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-y-8 '>
      <ContactLink>
        <MailIcon size={24} />
        <a
          href='mailto:kpirabaharan3@gmail.com'
          className='text-base md:text-xl group-hover:underline underline-offset-8'
        >
          kpirabaharan3@gmail.com
        </a>
      </ContactLink>

      <ContactLink>
        <PhoneIcon size={24} />
        <a
          href='tel:4166173498'
          className='text-base md:text-xl group-hover:underline underline-offset-8'
        >
          (416)-617-3498
        </a>
      </ContactLink>

      <ContactLink>
        <LinkedinIcon size={24} />
        <a
          href='https://www.linkedin.com/in/kpirabaharan/'
          className='text-base md:text-xl group-hover:underline underline-offset-8'
          target='_blank'
        >
          kpirabaharan
        </a>
      </ContactLink>

      <ContactLink>
        <GithubIcon size={24} />
        <a
          href='https://github.com/kpirabaharan'
          className='text-base md:text-xl group-hover:underline underline-offset-8'
          target='_blank'
        >
          kpirabaharan
        </a>
      </ContactLink>

      <ContactLink>
        <FileTextIcon size={24} />
        <a
          href='./Keeshigan-Pirabaharan-Resume.pdf'
          className='text-base md:text-xl group-hover:underline underline-offset-8'
          target='_blank'
        >
          Resume
        </a>
      </ContactLink>

      <ContactLink>
        <MapPinIcon size={24} />
        <p className='text-base md:text-xl'>Toronto, ON</p>
      </ContactLink>
    </div>
  );
};

export default ContactCard;
