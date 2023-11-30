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
      className='group flex w-fit items-center gap-x-4'
      modifier={{ x: 0.25, y: 0.5 }}
    >
      {children}
    </MagneticComponent>
  );
};

const ContactCard = () => {
  return (
    <div className='grid grid-cols-1 gap-y-8 md:grid-cols-2 '>
      <ContactLink>
        <MailIcon size={24} />
        <a
          href='mailto:kpirabaharan3@gmail.com'
          className='text-base underline-offset-8 group-hover:underline md:text-xl'
        >
          kpirabaharan3@gmail.com
        </a>
      </ContactLink>

      <ContactLink>
        <PhoneIcon size={24} />
        <a
          href='tel:4166173498'
          className='text-base underline-offset-8 group-hover:underline md:text-xl'
        >
          (416)-617-3498
        </a>
      </ContactLink>

      <ContactLink>
        <LinkedinIcon size={24} />
        <a
          href='https://www.linkedin.com/in/kpirabaharan/'
          className='text-base underline-offset-8 group-hover:underline md:text-xl'
          target='_blank'
        >
          kpirabaharan
        </a>
      </ContactLink>

      <ContactLink>
        <GithubIcon size={24} />
        <a
          href='https://github.com/kpirabaharan'
          className='text-base underline-offset-8 group-hover:underline md:text-xl'
          target='_blank'
        >
          kpirabaharan
        </a>
      </ContactLink>

      <ContactLink>
        <FileTextIcon size={24} />
        <a
          href='./Keeshigan-Pirabaharan-Resume.pdf'
          className='text-base underline-offset-8 group-hover:underline md:text-xl'
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
