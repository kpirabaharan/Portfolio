'use client';

import Link from 'next/link';

import useMediaQuery from '@/hooks/useMediaQuery';

import NavbarSheet from '@/components/navbar/NavbarSheet';
import CodeBy from '../CodeBy';
import { Button } from '../ui/button';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const isLargeScreen = useMediaQuery('(min-width: 1024px)');

  return (
    <nav
      className='flex flex-row gap-x-8 justify-between sm:justify-start 
      items-center w-full z-20 h-[80px] px-8'
    >
      <CodeBy />
      <NavbarSheet>
        <a className='flex sm:hidden hover:'>Menu</a>
      </NavbarSheet>
      <a className='ml-auto hidden sm:flex'>About</a>
      <a className='hidden sm:flex'>Skills</a>
      <a className='hidden sm:flex'>Projects</a>
      <a className='hidden sm:flex'>Contact</a>
    </nav>
  );
};

{
  /* <Button
className='fixed flex lg:hidden right-6 top-6'
size={'floating'}
>
<Menu size={24} />
</Button> */
}

export default Navbar;
