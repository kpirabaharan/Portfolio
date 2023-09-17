import Hero from '@/app/(home)/sections/Hero';
import Overview from '@/app/(home)/sections/About';

import Navbar from '@/components/navbar/Navbar';

const Home = () => {
  return (
    <div className='w-full overflow-x-hidden'>
      <div className='h-screen w-full bg-wallpaper bg-no-repeat bg-cover bg-center'>
        <Navbar />
        <Hero />
      </div>
      <Overview />
    </div>
  );
};

// bg-wallpaper bg-no-repeat bg-cover bg-center

export default Home;
