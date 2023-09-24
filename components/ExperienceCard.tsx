import Image from 'next/image';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';

import { ExperienceType } from '@/types';

export const ExperienceCard = ({
  title,
  company_name,
  location,
  icon,
  iconBg,
  date,
  points,
}: ExperienceType) => {
  return (
    <VerticalTimelineElement
      className={'vertical-timeline-element--work'}
      visible
      date={date}
      contentStyle={{ background: 'hsl(217.2 32.6% 17.5%)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid hsl(217.2 32.6% 15.5%)' }}
      iconStyle={{ background: iconBg }}
      icon={
        <Image
          src={icon.src}
          alt={title}
          fill
          className={'object-contain h-[80%] w-[80%] rounded-full'}
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
};
