'use client';

import { Lobster } from 'next/font/google';

import useMediaQuery from '@/hooks/useMediaQuery';

import { Container } from '@/components/Container';
import NavbarSheet from '@/components/navbar/NavbarSheet';

const lobster = Lobster({ weight: '400', subsets: ['latin'] });

const Navbar = () => {
  const isLargeScreen = useMediaQuery('(min-width: 1024px)');

  return (
    <nav className='fixed flex flex-row w-full items-center z-20 h-[80px] px-8'>
      <Container>
        <div className='hidden lg:flex flex-row items-center justify-between w-full'>
          <div>
            <h1 style={lobster.style} className='text-3xl'>
              K P
            </h1>
          </div>
          <div className='flex flex-row gap-x-8'>
            <p>Home</p>
            <p>About</p>
            <p>Skills</p>
            <p>Projects</p>
            <p>Contact</p>
          </div>
        </div>
      </Container>
      {!isLargeScreen && <NavbarSheet />}
    </nav>
  );
};

export default Navbar;
