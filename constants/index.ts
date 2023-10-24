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
  ecommerceAdmin,
  fourDoFRobot,
  velocityvoyage,
  ecommerce,
  sociopedia,
  partCollectingRobot,
  pathFollowingRobot,
} from '@/assets';
import { ExperienceType, ProjectType, FeaturedProjectType } from '@/types';

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
    title: 'Mechatronics',
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
      { name: 'SolidWorks', icon: solidworks, expertise: false },
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

export const featuredProjects: FeaturedProjectType[] = [
  {
    title: 'E-Commerce Store',
    color: '#47484a',
    image: ecommerceStore,
    type: 'Full Stack Project',
    link: '/projects/e-commerce',
  },
  {
    title: 'Netflix Clone',
    color: '#1f2937',
    image: netflixClone,
    type: 'Full Stack Project',
    link: '/projects/netflix-clone',
  },
  {
    title: 'Spotify Clone',
    color: '#0f172a',
    image: spotifyClone,
    type: 'Full Stack Project',
    link: '/projects/spotify-clone',
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
    description: `Built a robust e-commerce admin dashboard and store website, 
    leveraging Next.js, Shadcn, Tailwind CSS, AWS RDS, and S3 for seamless and 
    efficient store management.`,
    image: ecommerceStore,
    type: ['Full Stack'],
    github: 'https://github.com/kpirabaharan/E-Commerce-Admin-Dashboard',
    website: 'https://e-commerce-admin-dashboard-kpirabaharan.vercel.app/',
    link: '/projects/e-commerce',
  },
  {
    title: 'E-Commerce Admin Dashboard',
    description: `Built a robust e-commerce admin dashboard site, leveraging Next.js, 
    Shadcn, Tailwind CSS, AWS RDS, and S3 for seamless and efficient store management.`,
    image: ecommerceAdmin,
    type: ['Full Stack'],
    github: 'https://github.com/kpirabaharan/E-Commerce-Admin-Dashboard',
    website: 'https://e-commerce-admin-dashboard-kpirabaharan.vercel.app/',
    link: '/projects/e-commerce',
  },
  {
    title: 'Netflix Clone',
    description: `Full-stack Netflix clone built with Next.js, replicating the core 
    features of the popular movie streaming platform.`,
    image: netflixClone,
    type: ['Full Stack'],
    github: 'https://github.com/kpirabaharan/Netflix-Clone',
    website: 'https://netflix-clone-kpirabaharan.vercel.app',
    link: '/projects/netflix-clone',
  },
  {
    title: 'Spotify Clone',
    description: `Full-stack Spotify clone built with Next.js, replicating the core 
    features of the popular music streaming platform.`,
    image: spotifyClone,
    type: ['Full Stack'],
    github: 'https://github.com/kpirabaharan/Spotify-Clone',
    website: 'https://spotify-clone-kpirabaharan.vercel.app',
    link: '/projects/spotify-clone',
  },
  {
    title: 'Smart Windows App',
    description: `Collaborated on the Smart Windows Raspberry Pi Project, optimizing 
    window control through embedded systems, sensors, and an Android app, featuring Manual, 
    Smart, and Automatic modes.`,
    image: smartWindows,
    type: ['Mobile', 'Embedded'],
    github: 'https://github.com/kpirabaharan/Smart-Windows-App',
    website: 'https://www.youtube.com/watch?v=4RYRujc7fvM',
    link: '/projects/smart-windows',
  },
  {
    title: '4 DOF Robot',
    description: `Built and programmed a 4-DoF robotic arm as a mechatronic project, 
      capable of precise and coordinated movements for various applications.`,
    image: fourDoFRobot,
    type: ['Mechatronics'],
    github: 'https://github.com/kpirabaharan/Four-DOF-Robot',
  },
  {
    title: 'Velocity Voyage',
    description: `The endless runner video game, created with Unity, offers players an exciting 
      and challenging experience as they run and dodge obstacles for as long as possible.`,
    image: velocityvoyage,
    type: ['Game'],
    github: 'https://github.com/kpirabaharan/Velocity-Voyage',
  },
  {
    title: 'Tech Trendz',
    description: `This Web/Mobile application utilizes Stripe API to provide a secure online 
      shopping experience for users to purchase technology products with confidence.`,
    image: ecommerce,
    type: ['Full Stack Project', 'Mobile'],
    github: 'https://github.com/kpirabaharan/E-Commerce',
  },
  {
    title: 'Sociopedia',
    description: `The full-stack social media app provides users with a comprehensive 
      platform to connect, communicate, and share content with others in a seamless and 
      engaging manner.`,
    image: sociopedia,
    type: ['Full Stack', 'Mobile'],
    github: 'https://github.com/kpirabaharan/Social-Media-App',
  },
  {
    title: 'Part Collecting Robot',
    description: `Autonomous part collecting robot navigating dynamic environments, 
    avoiding obstacles, and efficiently collecting objects for streamlined operations.`,
    image: partCollectingRobot,
    type: ['Mechatronics'],
    github: 'https://github.com/kpirabaharan/Autonomous-Part-Collecting-Robot',
  },
  {
    title: 'Path Following Robot',
    description: `Autonomous line-following robot project designed to deliver 
    objects to a specific destination by accurately following a predefined path.`,
    image: pathFollowingRobot,
    type: ['Mechatronics'],
    website: 'https://www.youtube.com/watch?v=JBqL7PEfFzk',
  },
];
