import Image from 'next/image';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';

import { type ExperienceType } from '@/types';

export const ExperienceCard = ({
  title,
  companyName,
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
          src={icon}
          alt={title}
          fill
          className={'h-[80%] w-[80%] rounded-full object-contain'}
        />
      }
    >
      <h3 className='vertical-timeline-element-title text-lg font-bold lg:text-xl'>
        {title}
      </h3>
      <h4 className='vertical-timeline-element-subtitle lg:pt-2'>
        {companyName}
        <span className='pl-4'>|</span>
        <span className='pl-4'>{location}</span>
      </h4>

      <ul className='ml-3 mt-2 list-disc space-y-2'>
        {points.map((point, index) => (
          <li
            key={`experience-${index}`}
            className='pl-1 text-sm text-gray-200 lg:text-base'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};
