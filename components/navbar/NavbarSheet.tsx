import { PropsWithChildren } from 'react';
import { X } from 'lucide-react';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

interface NavbarSheetProps extends PropsWithChildren {}

export const NavbarSheet = ({ children: Trigger }: NavbarSheetProps) => {
  return (
    <Sheet>
      <SheetTrigger>{Trigger}</SheetTrigger>
      <SheetContent className='w-full sm:w-[540px] sm:max-w-full'>
        <SheetClose className='absolute' asChild>
          <Button className='right-6 top-6' size={'floating'}>
            <X className='h-6 w-6 md:h-8 md:w-8' />
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
