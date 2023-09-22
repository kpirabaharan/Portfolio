import { Link } from 'react-scroll';

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
        <NavLink className='ml-auto flex md:hidden cursor-pointer' side='left'>
          <a>Menu</a>
        </NavLink>
      </NavbarSheet>

      {/* DesktopNav */}
      <NavLink className='ml-auto hidden md:flex cursor-pointer'>
        <Link to='about' smooth={true} duration={1000}>
          About
        </Link>
      </NavLink>
      <NavLink className='hidden md:flex cursor-pointer'>
        <Link to='work' smooth={true} duration={1000}>
          Skills
        </Link>
      </NavLink>
      <NavLink className='hidden md:flex cursor-pointer'>
        <Link to='projects' smooth={true} duration={1000}>
          Projects
        </Link>
      </NavLink>
      <NavLink className='hidden md:flex cursor-pointer'>
        <Link to='contact' smooth={true} duration={1000}>
          Contact
        </Link>
      </NavLink>
    </nav>
  );
};
