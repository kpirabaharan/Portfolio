import { CodeBy } from '@/components/CodeBy';
import { NavbarSheet } from '@/components/navbar/NavbarSheet';
import { NavLink } from '@/components/navbar/NavLink';

export const StandingNavbar = () => {
  return (
    <nav
      className='flex flex-row gap-x-12 justify-between md:justify-start 
      items-center w-full z-20 h-[80px] px-8'
    >
      <CodeBy />

      {/* Mobile Nav */}
      <NavbarSheet>
        <NavLink className='ml-auto flex md:hidden cursor-pointer'>
          <a>Menu</a>
        </NavLink>
      </NavbarSheet>

      {/* DesktopNav */}
      <NavLink className='ml-auto hidden md:flex cursor-pointer'>
        <a>About</a>
      </NavLink>
      <NavLink className='hidden md:flex cursor-pointer'>
        <a>Skills</a>
      </NavLink>
      <NavLink className='hidden md:flex cursor-pointer'>
        <a>Projects</a>
      </NavLink>
      <NavLink className='hidden md:flex cursor-pointer'>
        <a>Contact</a>
      </NavLink>
    </nav>
  );
};
