import { cw, opg } from '@/assets';

export const heroSubHeading = [
  'Full Stack Developer',
  1000,
  'Mobile App Developer',
  1000,
  'Embedded Systems Engineer',
  1000,
  'Mechatronics/Software Engineer',
  5000,
];

export const about =
  "I'm Keeshigan Pirabaharan, a 24-year-old Mechatronics/Software engineer with a track record of crafting innovative solutions that seamlessly blend Frontend and Backend technologies. I possess a strong aptitude for rapid learning and a genuine enthusiasm for adopting new technologies to engineer efficient and scalable solutions that address real-world challenges.";

export const heroDescription = '';

export const experiences = [
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
