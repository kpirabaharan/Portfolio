import {
  cw,
  opg,
  ecommerceStore,
  netflixClone,
  spotifyClone,
  smartWindows,
} from '@/assets';
import { ExperienceType, FeaturedProjectType } from '@/types';

export const heroSubHeading = [
  'Full Stack Developer',
  1000,
  'Mobile App Developer',
  1000,
  'Embedded Systems Engineer',
  1000,
  'Mechatronics/Software Engineer',
  2000,
];

export const heroDescription = '';

export const experiences: ExperienceType[] = [
  {
    title: 'Associate Software Developer',
    company_name: 'Curtiss-Wright',
    location: 'Ottawa, ON',
    icon: cw,
    iconBg: '#e51938',
    date: 'June 2022 - Present',
    points: [
      `Developed automated test software using C and Bash Scripts to perform qualification testing on a vehicle management computer / network switch hybrid device`,
      `Collaborated with hardware engineers to optimize system performance and reliability`,
      `Created and maintained software documentation, including design specifications, code documentation, and user manuals`,
      `Participated in code reviews and worked with other developers to ensure software quality and adherence to coding standards`,
    ],
  },
  {
    title: 'Modifcations Team Lead (Internship)',
    company_name: 'Ontario Power Generation',
    location: 'Pickering, ON',
    icon: opg,
    iconBg: '#FFFFFF',
    date: 'July 2020 - July 2021',
    points: [
      `Managed small scale projects (< $200k) requiring engineering changes to the plant`,
      `Assisted senior project managers with capital project (>$200k), including coordination with internal stakeholder and EPC contractors to ensure project success`,
      `Exposure to industrial operations, complex system processes, and practical failure modes`,
      `Worked with a multidisciplinary team of engineers and technicians to support modifications`,
    ],
  },
];

export const featuredProjects: FeaturedProjectType[] = [
  {
    title: 'E-Commerce Store',
    color: '#1e293b',
    image: ecommerceStore,
    type: 'Full Stack Project',
    link: '/projects/ecommerce',
  },
  {
    title: 'Spotify Clone',
    color: '#042f2e',
    image: spotifyClone,
    type: 'Full Stack Project',
    link: '/projects/spotify',
  },
  {
    title: 'Netflix Clone',
    color: '#1e293b',
    image: netflixClone,
    type: 'Full Stack Project',
    link: '/projects/netflix',
  },
  {
    title: 'Smart Windows App',
    color: '#042f2e',
    image: smartWindows,
    type: 'Mobile + Embedded Systems Project',
    link: '/projects/smart-windows',
  },
];
