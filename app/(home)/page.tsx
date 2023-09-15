import Image from 'next/image';
import Hero from '@/app/(home)/sections/Hero';

const Home = () => {
  return (
    <div className='bg-wallpaper bg-no-repeat bg-cover bg-center'>
      <Hero />
    </div>
  );
};

export default Home;
