import NavbarSheet from '@/components/navbar/NavbarSheet';
import CodeBy from '@/components/CodeBy';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import NavLink from './NavLink';

const StandingNavbar = () => {
  return (
    <nav
      className='flex flex-row gap-x-12 justify-between md:justify-start 
      items-center w-full z-20 h-[80px] px-8'
    >
      <CodeBy />
      <NavbarSheet>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <a className='flex md:hidden hover:'>Menu</a>
            </TooltipTrigger>
            <TooltipContent
              side='left'
              className='border-none bg-background delay-0 duration-100'
            >
              <div className='w-1 h-1 rounded-full bg-white' />
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </NavbarSheet>
      <NavLink className='ml-auto hidden md:flex'>
        <a>About</a>
      </NavLink>
      <NavLink className='hidden md:flex'>
        <a>Skills</a>
      </NavLink>
      <NavLink className='hidden md:flex'>
        <a>Projects</a>
      </NavLink>
      <NavLink className='hidden md:flex'>
        <a>Contact</a>
      </NavLink>
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

export default StandingNavbar;
