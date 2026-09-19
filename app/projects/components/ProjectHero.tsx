import Image, { type StaticImageData } from 'next/image';

interface ProjectHeroProps {
  image: StaticImageData;
  alt: string;
  background: string;
}

// Full-width screenshot under the ProjectHeader.
const ProjectHero = ({ image, alt, background }: ProjectHeroProps) => (
  <div className='mx-auto w-full max-w-[110rem] md:px-16'>
    <div
      className='relative aspect-video w-full overflow-hidden ring-1 ring-foreground/10 md:rounded-2xl'
      style={{ background }}
    >
      <Image
        className='object-contain'
        src={image}
        alt={alt}
        fill
        priority
        sizes='(min-width: 1760px) 1632px, 100vw'
      />
    </div>
  </div>
);

export default ProjectHero;
