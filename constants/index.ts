import {
  additivemanufacturing,
  aisaas,
  android,
  arduino,
  aws,
  azure,
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
  kubernetes,
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
import type { ExperienceType, FeaturedProjectType, ProjectType } from '@/types';

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
    companyName: 'Curtiss-Wright',
    location: 'Ottawa, ON',
    icon: cw,
    iconBg: '#e51938',
    date: 'June 2023 - Present',
    points: [
      `Designed and developed a user-friendly Web GUI using TypeScript and NextJS, providing an alternative to the CLI interface and improving usability by 20%`,
      `Led the development of an automated testing framework for a 100G switch platform using Python, Pytest, and PowerShell, reducing testing time by 35%`,
      `Implemented backend logic in NodeJS to interface with internal APIs for monitoring hardware health and alerts`,
    ],
  },
  {
    title: 'Software Development Engineer I',
    companyName: 'Curtiss-Wright',
    location: 'Ottawa, ON',
    icon: cw,
    iconBg: '#e51938',
    date: 'June 2022 - June 2023',
    points: [
      `Developed a robust automated testing framework in C and Bash for qualification testing of a hybrid network switch and vehicle management system`,
      `Participated in agile ceremonies, code reviews, and collaborative development, ensuring alignment with software quality standards`,
      `Optimized development workflows by containerizing applications with Docker, reducing environment setup complexities and cutting development time by 10%`,
    ],
  },
  {
    title: 'Software Technical Engineer (PEY)',
    companyName: 'Ontario Power Generation',
    location: 'Pickering, ON',
    icon: opg,
    iconBg: '#FFFFFF',
    date: 'May 2020 - August 2021',
    points: [
      `Performed simulations using MATLAB to optimize efficiency and safety in nuclear plant operations, meeting Canadian Nuclear Safety Commission (CNSC) standards`,
      `Collaborated with a multidisciplinary team of engineers to adjust system and software requirements, ensuring compliance with regulatory metrics and performance benchmarks`,
      `Assisted in automating internal workflows using Python scripts, cutting down manual reporting time by 30%`,
    ],
  },
];

export const featuredSkillsText = `With expertise in React.js and Next.js for building dynamic web applications, proficiency in Linux and AWS for efficient deployment and management, and adept at using Docker and Kubernetes for containerization and orchestration, I bring a robust and versatile skill set to tackle modern software development challenges.`;

export const featuredTech = [
  { name: 'React.js', icon: reactjs },
  { name: 'Next.js', icon: nextjs },
  { name: 'Linux', icon: linux },
  { name: 'AWS', icon: aws },
  { name: 'Docker', icon: docker },
  { name: 'Kubernetes', icon: kubernetes },
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
      { name: 'Docker', icon: docker, expertise: true },
      { name: 'Kubernetes', icon: kubernetes, expertise: true },
    ],
  },
];

export const featuredProjects: FeaturedProjectType[] = [
  {
    title: 'E-Commerce Store',
    color: '#47484a',
    image: ecommerceStore,
    type: 'Full Stack Project',
    link: 'https://ecom-clothes.keeshigan.com/',
  },
  {
    title: 'Netflix Clone',
    color: '#1f2937',
    image: netflixClone,
    type: 'Full Stack Project',
    link: 'https://netflix-clone.keeshigan.com/',
  },
  {
    title: 'Spotify Clone',
    color: '#0f172a',
    image: spotifyClone,
    type: 'Full Stack Project',
    link: 'https://spotify-clone.keeshigan.com/',
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
    website: 'https://ecom-clothes.keeshigan.com/',
    link: '/projects/e-commerce',
  },
  {
    title: 'E-Commerce Admin Dashboard',
    description: `Built a robust e-commerce admin dashboard site, leveraging Next.js, 
    Shadcn, Tailwind CSS, AWS RDS, and S3 for seamless and efficient store management.`,
    image: ecommerceAdmin,
    type: ['Full Stack'],
    github: 'https://github.com/kpirabaharan/E-Commerce-Admin-Dashboard',
    website: 'https://ecom-admin.keeshigan.com/',
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
    website: 'https://netflix-clone.keeshigan.com/',
    link: '/projects/netflix-clone',
  },
  {
    title: 'Spotify Clone',
    description: `Full-stack Spotify clone built with Next.js, replicating the core 
    features of the popular music streaming platform.`,
    image: spotifyClone,
    type: ['Full Stack'],
    github: 'https://github.com/kpirabaharan/Spotify-Clone',
    website: 'https://spotify-clone.keeshigan.com/',
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

export const certificates = [
  {
    title: 'Azure Fundamentals',
    issuer: 'Microsoft',
    date: 'Issued July 2024',
    image: azure,
    link: 'https://learn.microsoft.com/api/credentials/share/en-us/KeeshiganPirabaharan-3406/DBB67C603F62FF52?sharingId=7C0D1C6FAAD2724D',
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Issued March 2024 • Expires March 2027',
    image: aws,
    link: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/09032e021b234f7a991de2bfb3b63080',
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
  dashboard_site: 'https://ecom-admin.keeshigan.com/',
  store_site_1: 'https://ecom-clothes.keeshigan.com/',
  store_site_2: 'https://ecom-shoes.keeshigan.com/',
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
  website: 'https://netflix-clone.keeshigan.com/',
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
  website: 'https://spotify-clone.keeshigan.com/',
};
