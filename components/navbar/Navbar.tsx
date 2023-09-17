'use client';

import Link from 'next/link';
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
            <a href='/' style={lobster.style} className='text-3xl'>
              K P
            </a>
          </div>
          <div className='flex flex-row gap-x-8'>
            <a href='/'>Home</a>
            <a href='#about'>About</a>
            <a href='#skills'>Skills</a>
            <a>Projects</a>
            <a>Contact</a>
          </div>
        </div>
      </Container>
      {!isLargeScreen && <NavbarSheet />}
    </nav>
  );
};

export default Navbar;
