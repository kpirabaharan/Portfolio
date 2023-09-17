'use client';

import Link from 'next/link';

import useMediaQuery from '@/hooks/useMediaQuery';

import NavbarSheet from '@/components/navbar/NavbarSheet';
import CodeBy from '../CodeBy';

const Navbar = () => {
  const isLargeScreen = useMediaQuery('(min-width: 1024px)');

  return (
    <nav className='flex flex-row gap-x-8 items-center w-full z-20 h-[80px] px-8'>
      <div>
        <CodeBy />
      </div>

      <a className='ml-auto' href='#about'>
        About
      </a>
      <a href='#skills'>Skills</a>
      <a>Projects</a>
      <a>Contact</a>
    </nav>
  );
};

export default Navbar;
