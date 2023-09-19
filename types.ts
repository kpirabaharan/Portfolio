import { StaticImageData } from 'next/image';

export interface ExperienceType {
  title: string;
  company_name: string;
  location: string;
  icon: StaticImageData;
  iconBg: string;
  date: string;
  points: string[];
}
export interface FeaturedProjectType {
  name: string;
  image: StaticImageData;
  link: string;
  type: string;
}
