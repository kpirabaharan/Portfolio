import Image, { type StaticImageData } from 'next/image';

import { cn } from '@/lib/utils';

interface DisplayPictureProps {
  src: string | StaticImageData;
  alt: string;
  className?: string;
}

// Framed screenshot (or looping video) used on the project detail pages.
const DisplayPicture = ({ src, alt, className }: DisplayPictureProps) => {
  return (
    <div
      className={cn(
        'relative mx-auto aspect-video w-full overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10',
        className,
      )}
    >
      {typeof src === 'string' ? (
        <video
          className='size-full object-cover'
          muted
          loop
          autoPlay
          playsInline
          controls
          disablePictureInPicture
          aria-label={alt}
        >
          <source src={src} type='video/mp4' />
        </video>
      ) : (
        <Image
          className='object-contain'
          src={src}
          alt={alt}
          fill
          sizes='(min-width: 1280px) 1152px, 100vw'
        />
      )}
    </div>
  );
};

export default DisplayPicture;
