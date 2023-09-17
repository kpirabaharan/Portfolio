'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

const NavbarSheet = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger>
        <Button
          className='fixed flex lg:hidden right-6 top-6'
          size={'floating'}
        >
          <Menu size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent className='w-[400px] sm:w-[540px]'>
        <SheetClose className='absolute' asChild>
          <Button className='flex lg:hidden right-6 top-6' size={'floating'}>
            <X size={24} />
          </Button>
        </SheetClose>
        <SheetHeader className='items-center gap-y-8 h-full justify-center text-3xl'>
          <p>Home</p>
          <p>About</p>
          <p>Skills</p>
          <p>Projects</p>
          <p>Contact</p>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default NavbarSheet;
