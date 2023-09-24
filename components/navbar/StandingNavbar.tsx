import MagneticComponent from '@/hoc/MagneticComponent';

import { CodeBy } from '@/components/CodeBy';

import { NavLink } from '@/components/navbar/NavLink';
import useNavModal from '@/hooks/useNavModal';

export const StandingNavbar = () => {
  const { onOpen } = useNavModal();
  return (
    <nav
      className='flex flex-row gap-x-2 justify-between md:justify-start 
      items-center w-full z-20 h-[80px] px-2 md:px-8'
    >
      <MagneticComponent modifier={{ x: 0.25, y: 0.5 }}>
        <CodeBy />
      </MagneticComponent>

      {/* Mobile Nav */}
      <NavLink
        className='ml-auto flex md:hidden cursor-pointer p-4'
        side='left'
      >
        <p onClick={onOpen}>Menu</p>
      </NavLink>

      {/* DesktopNav */}

      <NavLink className='ml-auto md:flex hidden cursor-pointer' side='bottom'>
        <a>Home</a>
      </NavLink>
      <NavLink className='md:flex hidden cursor-pointer' side='bottom'>
        <a>About</a>
      </NavLink>
      <NavLink className='md:flex hidden cursor-pointer' side='bottom'>
        <a>Projects</a>
      </NavLink>
      <NavLink className='md:flex hidden cursor-pointer' side='bottom'>
        <a>Contact</a>
      </NavLink>
    </nav>
  );
};
