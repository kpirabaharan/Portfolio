import MagneticComponent from '@/hoc/MagneticComponent';

import { CodeBy } from '@/components/CodeBy';

import { NavLink } from '@/components/navbar/NavLink';

export const StandingNavbar = () => {
  return (
    <nav
      className='flex flex-row gap-x-8 justify-between md:justify-start 
      items-center w-full z-20 h-[80px] px-8 '
    >
      <MagneticComponent modifier={{ x: 0.25, y: 0.5 }}>
        <CodeBy />
      </MagneticComponent>

      {/* Mobile Nav */}
      <MagneticComponent
        modifier={{ x: 0.25, y: 0.5 }}
        className='ml-auto md:hidden flex cursor-pointer text-lg'
      >
        <NavLink side='left'>
          <a>Menu</a>
        </NavLink>
      </MagneticComponent>

      {/* DesktopNav */}
    </nav>
  );
};
