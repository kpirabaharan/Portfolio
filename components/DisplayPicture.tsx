import Image, { type StaticImageData } from 'next/image';

interface DisplayPictureProps {
  src: string | StaticImageData;
}

const DisplayPicture = ({ src }: DisplayPictureProps) => {
  return (
    <div className='relative mx-auto mt-8 aspect-video w-[80%] overflow-visible'>
      {typeof src === 'string' ? (
        <video
          className='h-full w-full object-cover'
          muted
          loop
          autoPlay
          controls
          disablePictureInPicture
        >
          <source src={src} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      ) : (
        <Image
          className='relative bg-white object-contain'
          src={src}
          alt='Project Picture'
          fill
        />
      )}
    </div>
  );
};

export default DisplayPicture;
