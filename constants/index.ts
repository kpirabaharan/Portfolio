import {
  additivemanufacturing,
  aisaas,
  android,
  arduino,
  aws,
  c,
  cpp,
  css,
  cw,
  dart,
  debug,
  django,
  docker,
  ecommerce,
  ecommerceAdmin,
  ecommerceFlutter,
  ecommerceStore,
  expressjs,
  firebase,
  flutter,
  fourDoFRobot,
  git,
  html,
  java,
  javascript,
  jetpack,
  kotlin,
  linux,
  material,
  mongodb,
  mySQL,
  netflixClone,
  network,
  nextjs,
  nodejs,
  opg,
  partCollectingRobot,
  pathFollowingRobot,
  postgreSQL,
  prisma,
  python,
  raspberryPi,
  reactjs,
  redux,
  riverpod,
  smartWindows,
  sociopedia,
  solidworks,
  spotifyClone,
  supabase,
  tailwind,
  typescript,
  velocityvoyage,
} from '@/assets';
import { ExperienceType, FeaturedProjectType, ProjectType } from '@/types';

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
  'I am a Full Stack Developer',
  1000,
  'I am a Mobile App Developer',
  1000,
  'I am a Embedded Systems Engineer',
  1000,
  'I am a Software Engineer',
  1000,
  'I am a Mechatronics Engineer',
];

export const experiences: ExperienceType[] = [
  {
    title: 'Software Development Engineer II',
    company_name: 'Curtiss-Wright',
    location: 'Ottawa, ON',
    icon: cw,
    iconBg: '#e51938',
    date: 'June 2023 - Present',
    points: [
      `Seamlessly integrated data plane and control plane ports to optimize network performance and functionality for a new 100G switch platform`,
      `Developed an automated software testing framework for a new 100G switch platform with multiple variants using Python, Tcl, and Spirent`,
      `Debugged and resolved critical hardware issues causing CPU core failures, halting production and sales of numerous units`,
      `Created a Web GUI platform using React.js and Hiawatha to allow users to make switch configuration adjustments along with existing CLI platform`,
    ],
  },
  {
    title: 'Software Development Engineer I',
    company_name: 'Curtiss-Wright',
    location: 'Ottawa, ON',
    icon: cw,
    iconBg: '#e51938',
    date: 'June 2022 - June 2023',
    points: [
      `Developed automated C and Bash test software for qualification testing on a hybrid vehicle management / network switch device`,
      `Performed maintenance software releases for switch software, resolving critical customer-facing bugs and enhanced documentation for improved clarity`,
      `Utilized Docker to streamline cross-compilation toolchain setup for ARM SBCs`,
    ],
  },
  {
    title: 'Software Technical Engineer (PEY)',
    company_name: 'Ontario Power Generation',
    location: 'Pickering, ON',
    icon: opg,
    iconBg: '#FFFFFF',
    date: 'May 2020 - August 2021',
    points: [
      `Enhanced plant control software to optimize efficiency and safety of nuclear power plant operations by utilizing MATLAB for simulation and validation`,
      `Engaged closely with regulatory bodies such as the Canadian Nuclear Safety Commission (CNSC) to ensure compliance with regulatory requirements`,
      `Proactively monitored changes in regulatory standards and guidelines, implementing necessary updates to software systems to maintain compliance`,
      `Collaborated with maintenance teams to develop software-based solutions for optimizing outage schedules and reducing downtime`,
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
    link: 'https://e-commerce-store-clothes-kpirabaharan.vercel.app/',
  },
  {
    title: 'Netflix Clone',
    color: '#1f2937',
    image: netflixClone,
    type: 'Full Stack Project',
    link: 'https://netflix-clone-kpirabaharan.vercel.app/',
  },
  {
    title: 'Spotify Clone',
    color: '#0f172a',
    image: spotifyClone,
    type: 'Full Stack Project',
    link: 'https://spotify-clone-kpirabaharan.vercel.app/',
  },
  {
    title: 'Smart Windows App',
    color: '#18181b',
    image: smartWindows,
    type: 'Mobile + Mechatronic Systems Project',
    link: 'https://github.com/kpirabaharan/Smart-Windows-App/',
  },
];

export const allProjects: ProjectType[] = [
  // {
  //   title: 'Twitch Clone',
  //   description: `Full-stack Twitch clone built with Next.js, replicating the core
  //   features of the popular live streaming platform.`,
  //   image: ,
  //   type: ['Full Stack'],
  //   github: 'https://github.com/kpirabaharan/Twitch-Clone',
  //   link: '/projects/twitch-clone',
  // },
  {
    title: 'Velocity Voyage',
    description: `The endless runner video game, created with Unity, offers players an exciting 
      and challenging experience as they run and dodge obstacles for as long as possible.`,
    image: velocityvoyage,
    type: ['Game'],
    github: 'https://github.com/kpirabaharan/Velocity-Voyage',
  },

  {
    title: 'AI SaaS Platform',
    description: `Developed a robust AI SaaS platform, leveraging Next.js,
    Tailwind CSS, AWS S3 and OpenAI API to provide users with a seamless and
    efficient AI service.`,
    image: aisaas,
    type: ['Full Stack', 'AI'],
    github: 'https://github.com/kpirabaharan/AI-SaaS',
    link: '/projects/ai-saas',
  },
  {
    title: 'E-Commerce Store',
    description: `Built a robust e-commerce admin dashboard and store website, 
    leveraging Next.js, Shadcn, Tailwind CSS, AWS RDS, and S3 for seamless and 
    efficient store management.`,
    image: ecommerceStore,
    type: ['Full Stack'],
    github: 'https://github.com/kpirabaharan/E-Commerce-Store',
    website: 'https://e-commerce-store-clothes-kpirabaharan.vercel.app/',
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
    title: 'Tech Trendz',
    description: `This Web/Mobile application utilizes Stripe API to provide a secure online 
      shopping experience for users to purchase technology products with confidence.`,
    image: ecommerce,
    type: ['Full Stack Project', 'Mobile'],
    github: 'https://github.com/kpirabaharan/Tech-Trendz',
  },
  {
    title: 'E-Commerce Flutter App',
    description: `Built a robust e-commerce mobile app, leveraging Flutter,
    Riverpod, Tailwind CSS, Stripe SDK and an existing node backend for seamless
    and efficient store management.`,
    image: ecommerceFlutter,
    type: ['Mobile'],
    github: 'https://github.com/kpirabaharan/E-Commerce-Flutter-App',
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
    title: 'Sociopedia',
    description: `The full-stack social media app provides users with a comprehensive 
      platform to connect, communicate, and share content with others in a seamless and 
      engaging manner.`,
    image: sociopedia,
    type: ['Full Stack', 'Mobile'],
    github: 'https://github.com/kpirabaharan/Social-Media-App',
  },
  {
    title: 'Smart Windows App',
    description: `Collaborated on the Smart Windows Raspberry Pi Project, optimizing 
    window control through embedded systems, sensors, and an Android app, featuring Manual, 
    Smart, and Automatic modes.`,
    image: smartWindows,
    type: ['Mechatronics', 'Mobile'],
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
    title: 'Path Following Robot',
    description: `Autonomous line-following robot project designed to deliver 
    objects to a specific destination by accurately following a predefined path.`,
    image: pathFollowingRobot,
    type: ['Mechatronics'],
    github: 'https://www.youtube.com/watch?v=JBqL7PEfFzk',
  },
  {
    title: 'Part Collecting Robot',
    description: `Autonomous part collecting robot navigating dynamic environments, 
    avoiding obstacles, and efficiently collecting objects for streamlined operations.`,
    image: partCollectingRobot,
    type: ['Mechatronics'],
    github: 'https://github.com/kpirabaharan/Autonomous-Part-Collecting-Robot',
  },
];

export const eCommerce = {
  title: 'E-Commerce Store',
  date: 'August - October 2023',
  description: `Built a robust e-commerce admin dashboard and store website, 
  leveraging Next.js, Shadcn, Tailwind CSS, AWS RDS, and S3 for seamless and 
  efficient store management.`,
  category: ['Full Stack', 'Mobile'],
  key_tech: ['AWS S3', 'AWS RDS', 'Stripe'],
  store_image: ecommerceStore,
  dashboard_image: ecommerceAdmin,
  github: 'https://github.com/kpirabaharan/E-Commerce-Admin-Dashboard',
  dashboard_site: 'https://e-commerce-admin-dashboard-kpirabaharan.vercel.app/',
  store_site_1: 'https://e-commerce-store-clothes-kpirabaharan.vercel.app/',
  store_site_2: 'https://e-commerce-store-shoes-kpirabaharan.vercel.app/',
};

export const netflix = {
  title: 'Netflix Clone',
  date: 'June - July 2023',
  description: `Full-stack Netflix clone built with Next.js, replicating the core
  features of the popular movie streaming platform.`,
  category: ['Full Stack'],
  key_tech: ['AWS S3', 'MongoDB', 'NextAuth'],
  website_image: netflixClone,
  github: 'https://github.com/kpirabaharan/Neflix-Clone',
  website: 'https://netflix-clone-kpirabaharan.vercel.app',
};

export const spotify = {
  title: 'Spotify Clone',
  date: 'April - May 2023',
  description: `Full-stack Spotify clone built with Next.js, replicating the core
  features of the popular music streaming platform.`,
  category: ['Full Stack'],
  key_tech: ['Supabase', 'Stripe', 'React Player'],
  website_image: spotifyClone,
  github: 'https://github.com/kpirabaharan/Spotfiy-Clone',
  website: 'https://spotify-clone-kpirabaharan.vercel.app',
};
