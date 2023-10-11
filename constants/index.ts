import {
  cw,
  opg,
  ecommerceStore,
  netflixClone,
  spotifyClone,
  smartWindows,
  javascript,
  typescript,
  python,
  c,
  cpp,
  csharp,
  dart,
  java,
  kotlin,
  html,
  css,
  reactjs,
  nextjs,
  redux,
  tailwind,
  nodejs,
  expressjs,
  django,
  firebase,
  supabase,
  mongodb,
  mySQL,
  postgreSQL,
  prisma,
  flutter,
  android,
  linux,
  network,
  solidworks,
  arduino,
  raspberryPi,
  additivemanufacturing,
  aws,
  docker,
  git,
  debug,
} from '@/assets';
import { ExperienceType, ProjectType, Tech } from '@/types';

export const navLinks = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Skills',
    href: '/skills',
  },
  {
    title: 'Projects',
    href: '/projects',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
];

export const socials = [
  { name: 'LinkedIn', link: 'https://linkedin.com/in/kpirabaharan' },
  { name: 'Github', link: 'https://github.com/kpirabaharan' },
  { name: 'Resume', link: './Keeshigan-Pirabaharan-Resume.pdf' },
];

export const heroSubHeading = [
  2500,
  'Full Stack Developer',
  1000,
  'Mobile App Developer',
  1000,
  'Embedded Systems Engineer',
  1000,
  'Mechatronics/Software Engineer',
];

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
      `Managed small scale projects (<$200k) requiring engineering changes to the plant`,
      `Assisted senior project managers with capital project (>$200k), including coordination with internal stakeholder and EPC contractors to ensure project success`,
      `Exposure to industrial operations, complex system processes, and practical failure modes`,
      `Worked with a multidisciplinary team of engineers and technicians to support modifications`,
    ],
  },
];

export const featuredProjects: ProjectType[] = [
  {
    title: 'E-Commerce Store',
    color: '#47484a',
    image: ecommerceStore,
    type: 'Full Stack Project',
    link: '/projects/ecommerce',
  },
  {
    title: 'Spotify Clone',
    color: '#0f172a',
    image: spotifyClone,
    type: 'Full Stack Project',
    link: '/projects/spotify',
  },
  {
    title: 'Netflix Clone',
    color: '#1f2937',
    image: netflixClone,
    type: 'Full Stack Project',
    link: '/projects/netflix',
  },
  {
    title: 'Smart Windows App',
    color: '#18181b',
    image: smartWindows,
    type: 'Mobile + Embedded Systems Project',
    link: '/projects/smart-windows',
  },
];

export const allProjects: ProjectType[] = [
  {
    title: 'E-Commerce Store',
    color: '#47484a',
    image: ecommerceStore,
    type: 'Full Stack Project',
    link: '/projects/ecommerce',
  },
  {
    title: 'Spotify Clone',
    color: '#0f172a',
    image: spotifyClone,
    type: 'Full Stack Project',
    link: '/projects/spotify',
  },
  {
    title: 'Netflix Clone',
    color: '#1f2937',
    image: netflixClone,
    type: 'Full Stack Project',
    link: '/projects/netflix',
  },
  {
    title: 'Smart Windows App',
    color: '#18181b',
    image: smartWindows,
    type: 'Mobile + Embedded Systems Project',
    link: '/projects/smart-windows',
  },
];

export const techStack = [
  {
    title: 'Frontend',
    tech: [
      { name: 'HTML', icon: html },
      { name: 'CSS 3', icon: css },
      { name: 'Tailwind CSS', icon: tailwind },
      { name: 'React.js', icon: reactjs },
      { name: 'Next.js', icon: nextjs },
      { name: 'Redux Toolkit', icon: redux },
    ],
  },
  {
    title: 'Backend',
    tech: [
      { name: 'Node.js', icon: nodejs },
      { name: 'Express.js', icon: expressjs },
      { name: 'Django', icon: django },
      { name: 'Firebase', icon: firebase },
      { name: 'Supabase', icon: supabase },
    ],
  },
  {
    title: 'Databases',
    tech: [
      { name: 'MongoDB', icon: mongodb },
      { name: 'MySQL', icon: mySQL },
      { name: 'PostgreSQL', icon: postgreSQL },
      { name: 'Prisma', icon: prisma },
    ],
  },
  {
    title: 'Mobile',
    tech: [
      { name: 'Flutter', icon: flutter },
      { name: 'Android', icon: android },
    ],
  },
  {
    title: 'Embedded Systems',
    tech: [
      { name: 'C', icon: c },
      { name: 'C++', icon: cpp },
      { name: 'C#', icon: csharp },
      { name: 'Dart', icon: dart },
      { name: 'Java', icon: java },
      { name: 'Kotlin', icon: kotlin },
    ],
  },
  {
    title: 'Other',
    tech: [
      { name: 'AWS', icon: aws },
      { name: 'Docker', icon: docker },
      { name: 'Git', icon: git },
      { name: 'Debugging', icon: debug },
    ],
  },
];

export const frontend: Tech[] = [
  { name: 'HTML', icon: html },
  { name: 'CSS 3', icon: css },
  { name: 'Tailwind CSS', icon: tailwind },
  { name: 'React.js', icon: reactjs },
  { name: 'Next.js', icon: nextjs },
  { name: 'Redux Toolkit', icon: redux },
];
