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
  riverpod,
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

export const featuredSkillsText = `I am a full-stack developer with a passion for building beautiful
websites and applications. I have experience creating production grade
software with a wide range of javascript frameworks including React.js,
Next.js, Node.js, Express.js. I am enthusiatic to learn new technologies
if it means I can build better products without cutting corners.`;

export const featuredTech = [
  { name: 'React.js', icon: reactjs, expertise: true },
  { name: 'Next.js', icon: nextjs, expertise: true },
  { name: 'Node.js', icon: nodejs, expertise: true },
  { name: 'Express.js', icon: expressjs, expertise: true },
];

export const techStack = [
  {
    title: 'Languages',
    description: `I am a highly adaptable software developer with the ability to 
    learn and use multiple programming languages and frameworks to create software
    solutions. These are the languages I have developed applications with:`,
    tech: [
      { name: 'JavaScript', icon: javascript, expertise: true },
      { name: 'TypeScript', icon: typescript, expertise: true },
      { name: 'Python', icon: python, expertise: true },
      { name: 'Java', icon: java, expertise: true },
      { name: 'C', icon: c, expertise: true },
      { name: 'C++', icon: cpp, expertise: false },
      { name: 'Dart', icon: dart, expertise: false },
      { name: 'Kotlin', icon: kotlin, expertise: false },
    ],
  },
  {
    title: 'Frontend',
    description: `I am a highly adaptable software developer with the ability to 
    learn and use multiple programming languages and frameworks to create software
    solutions. These are the languages I have developed applications with:`,
    tech: [
      { name: 'HTML', icon: html, expertise: true },
      { name: 'CSS 3', icon: css, expertise: true },
      { name: 'Tailwind', icon: tailwind, expertise: true },
      { name: 'React.js', icon: reactjs, expertise: true },
      { name: 'Next.js', icon: nextjs, expertise: true },
      { name: 'Redux', icon: redux, expertise: true },
    ],
  },
  {
    title: 'Backend',
    description: `I am a highly adaptable software developer with the ability to 
    learn and use multiple programming languages and frameworks to create software
    solutions. These are the languages I have developed applications with:`,
    tech: [
      { name: 'Node.js', icon: nodejs, expertise: true },
      { name: 'Express.js', icon: expressjs, expertise: true },
      { name: 'Django', icon: django, expertise: false },
      { name: 'Firebase', icon: firebase, expertise: false },
      { name: 'Supabase', icon: supabase, expertise: false },
    ],
  },
  {
    title: 'Databases',
    description: `I am a highly adaptable software developer with the ability to 
    learn and use multiple programming languages and frameworks to create software
    solutions. These are the languages I have developed applications with:`,
    tech: [
      { name: 'MongoDB', icon: mongodb, expertise: true },
      { name: 'MySQL', icon: mySQL, expertise: true },
      { name: 'PostgreSQL', icon: postgreSQL, expertise: true },
      { name: 'Prisma', icon: prisma, expertise: true },
    ],
  },
  {
    title: 'Mobile',
    description: `I am a highly adaptable software developer with the ability to 
    learn and use multiple programming languages and frameworks to create software
    solutions. These are the languages I have developed applications with:`,
    tech: [
      { name: 'Flutter', icon: flutter, expertise: true },
      { name: 'Riverpod', icon: riverpod, expertise: true },
      { name: 'Android', icon: android, expertise: false },
    ],
  },
  {
    title: 'Mechatronics / Embedded',
    description: `I am a highly adaptable software developer with the ability to 
    learn and use multiple programming languages and frameworks to create software
    solutions. These are the languages I have developed applications with:`,
    tech: [
      { name: 'Linux', icon: linux, expertise: true },
      { name: 'Raspberry Pi', icon: raspberryPi, expertise: true },
      { name: 'Arduino', icon: arduino, expertise: true },
      { name: 'Network Protocols', icon: network, expertise: true },
      { name: '3D Printing', icon: additivemanufacturing, expertise: true },
      { name: 'SolidWorks', icon: solidworks },
    ],
  },
  {
    title: 'Other',
    description: `I am a highly adaptable software developer with the ability to 
    learn and use multiple programming languages and frameworks to create software
    solutions. These are the languages I have developed applications with:`,
    tech: [
      { name: 'Git', icon: git, expertise: true },
      { name: 'Debugging', icon: debug, expertise: true },
      { name: 'AWS', icon: aws, expertise: true },
      { name: 'Docker', icon: docker, expertise: false },
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
