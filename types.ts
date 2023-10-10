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
export interface ProjectType {
  title: string;
  type: string;
  image: StaticImageData;
  color: string;
  link: string;
}
