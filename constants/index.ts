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
  jetpack,
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
  material,
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
    learn and use multiple programming languages and frameworks to create a variety
    of software as a service.`,
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
    description: `With a solid grasp of the latest frontend technologies, I have
    effectively built intuitive and visually appealing front-end interfaces that 
    seamlessly integrate with complex back-end functionalities.`,
    tech: [
      { name: 'HTML', icon: html, expertise: true },
      { name: 'CSS 3', icon: css, expertise: true },
      { name: 'React.js', icon: reactjs, expertise: true },
      { name: 'Next.js', icon: nextjs, expertise: true },
      { name: 'Redux', icon: redux, expertise: true },
      { name: 'Tailwind', icon: tailwind, expertise: true },
      { name: 'Material UI', icon: material, expertise: false },
    ],
  },
  {
    title: 'Backend',
    description: `Proficient in Node.js and Express.js, I've crafted robust back-end 
    solutions, showcasing a keen grasp of server-side operations. Familiar with Django, 
    Firebase, and Supabase, I'm poised to seamlessly integrate these technologies 
    into complex projects.`,
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
    description: `I am proficient in working with various databases, including MongoDB,
    MySQL, and PostgreSQL. Leveraging Prisma as an ORM, I ensure efficient data
    management and seamless integration for diverse software applications.`,
    tech: [
      { name: 'MongoDB', icon: mongodb, expertise: true },
      { name: 'MySQL', icon: mySQL, expertise: true },
      { name: 'PostgreSQL', icon: postgreSQL, expertise: true },
      { name: 'Prisma', icon: prisma, expertise: true },
    ],
  },
  {
    title: 'Mobile',
    description: `I possess strong skills in Flutter and Riverpod, utilizing these
    tools to create robust and cross-platform mobile applications. While I am 
    currently exploring Android and Jetpack Compose, I am eager to apply them to 
    future development projects.`,
    tech: [
      { name: 'Flutter', icon: flutter, expertise: true },
      { name: 'Riverpod', icon: riverpod, expertise: false },
      { name: 'Android', icon: android, expertise: false },
      { name: 'Jetpack Compose', icon: jetpack, expertise: false },
    ],
  },
  {
    title: 'Mechatronics / Embedded',
    description: `I hold a degree in Mechatronics and have substantial experience 
    as an Embedded Software Developer, specializing in Linux and switch software 
    development. Leveraging my expertise in various technologies, I adeptly design 
    innovative solutions in the realm of mechatronics and embedded systems.`,
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
    description: `I am proficient in Git and Debugging, utilizing these tools for 
    effective version control and software troubleshooting. With a strong grasp 
    of AWS, I ensure seamless cloud computing solutions. While I am currently 
    exploring Docker, I am eager to incorporate it into future projects for 
    streamlined development processes.`,
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
