'use client';

import { PropsWithChildren } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { X } from 'lucide-react';

import { NavLink } from '@/components/navbar/NavLink';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Separator } from '../ui/separator';

interface NavbarSheetProps extends PropsWithChildren {}

export const NavbarSheet = ({ children: Trigger }: NavbarSheetProps) => {
  const scrollHome = () => {
    scroll.scrollToTop();
  };

  return (
    <Sheet>
      <SheetTrigger>{Trigger}</SheetTrigger>
      <SheetContent className='w-full sm:w-[540px] sm:max-w-full'>
        <SheetClose className='absolute' asChild>
          <Button className='right-6 top-6' size={'floating'}>
            <X className='h-6 w-6 md:h-8 md:w-8' />
          </Button>
        </SheetClose>
        <SheetHeader
          className='flex flex-col justify-center items-start w-2/3 mx-auto 
          h-full gap-y-8'
        >
          <div className='flex flex-col gap-y-4 w-full'>
            <p className='text-muted-foreground'>Navigation</p>
            <Separator />
          </div>

          <NavLink
            className='hidden md:flex cursor-pointer text-3xl md-height:lg:text-5xl'
            side='left'
            size='large'
          >
            <SheetClose>
              <a onClick={scrollHome} className='cursor-pointer'>
                Home
              </a>
            </SheetClose>
          </NavLink>

          <Link to='about' smooth={true} duration={1000}>
            <NavLink
              className='hidden md:flex cursor-pointer text-3xl md-height:lg:text-5xl'
              side='left'
              size='large'
            >
              <SheetClose>About</SheetClose>
            </NavLink>
          </Link>

          <Link to='work' smooth={true} duration={1000}>
            <NavLink
              className='hidden md:flex cursor-pointer text-3xl md-height:lg:text-5xl'
              side='left'
              size='large'
            >
              <SheetClose>Skills</SheetClose>
            </NavLink>
          </Link>

          <Link to='projects' smooth={true} duration={1000}>
            <NavLink
              className='hidden md:flex cursor-pointer text-3xl md-height:lg:text-5xl'
              side='left'
              size='large'
            >
              <SheetClose>Projects</SheetClose>
            </NavLink>
          </Link>

          <Link to='contact' smooth={true} duration={1000}>
            <NavLink
              className='hidden md:flex cursor-pointer text-3xl md-height:lg:text-5xl'
              side='left'
              size='large'
            >
              <SheetClose>Contact</SheetClose>
            </NavLink>
          </Link>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
