import { StaticImageData } from 'next/image';

export interface ExperienceType {
  title: string;
  companyName: string;
  location: string;
  icon: StaticImageData;
  iconBg: string;
  date: string;
  points: string[];
}
export interface FeaturedProjectType {
  title: string;
  type: string;
  image: StaticImageData;
  color: string;
  link: string;
  /** Case-study page on this site; the tile links here instead of `link`. */
  caseStudy?: string;
}

export interface ProjectType {
  title: string;
  description: string;
  type: string[];
  image: StaticImageData;
  github: string;
  website?: string;
  link?: string;
}
export interface Tech {
  name: string;
  icon: StaticImageData;
}
