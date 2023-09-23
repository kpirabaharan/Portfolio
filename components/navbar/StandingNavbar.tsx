import { Link } from 'react-scroll';

import MagneticComponent from '@/hoc/MagneticComponent';

import { CodeBy } from '@/components/CodeBy';
import { NavbarSheet } from '@/components/navbar/NavbarSheet';
import { NavLink } from '@/components/navbar/NavLink';

export const StandingNavbar = () => {
  return (
    <nav
      className='flex flex-row gap-x-4 justify-between md:justify-start 
      items-center w-full z-20 h-[80px] px-8'
    >
      <MagneticComponent modifier={{ x: 0.25, y: 0.5 }}>
        <CodeBy />
      </MagneticComponent>

      {/* Mobile Nav */}
      <MagneticComponent
        modifier={{ x: 0.25, y: 0.5 }}
        className='ml-auto md:hidden flex cursor-pointer text-lg'
      >
        <NavbarSheet>
          <NavLink side='left'>
            <a>Menu</a>
          </NavLink>
        </NavbarSheet>
      </MagneticComponent>

      {/* DesktopNav */}
      <NavLink className='ml-auto hidden md:flex cursor-pointer text-lg'>
        <Link to='about' hashSpy smooth={true} duration={1000}>
          About
        </Link>
      </NavLink>

      <NavLink className='hidden md:flex cursor-pointer text-lg'>
        <Link to='work' hashSpy smooth={true} duration={1000}>
          Skills
        </Link>
      </NavLink>

      <NavLink className='hidden md:flex cursor-pointer text-lg'>
        <Link to='projects' hashSpy smooth={true} duration={1000}>
          Projects
        </Link>
      </NavLink>

      <NavLink className='hidden md:flex cursor-pointer text-lg'>
        <Link to='contact' hashSpy smooth={true} duration={1000}>
          Contact
        </Link>
      </NavLink>
    </nav>
  );
};
