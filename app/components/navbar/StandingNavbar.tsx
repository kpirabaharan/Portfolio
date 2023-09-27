'use client';

import { usePathname } from 'next/navigation';

import useNavModal from '@/hooks/useNavModal';
import useSplash from '@/hooks/useSplash';

import MagneticComponent from '@/hoc/MagneticComponent';
import { CodeBy } from '@/components/CodeBy';
import { NavLink } from '@/app/components/navbar/NavLink';

import { navLinks } from '@/constants';

export const StandingNavbar = () => {
  const pathname = usePathname();
  const { onOpen } = useNavModal();
  const { startSplash } = useSplash();

  return (
    <nav
      className='flex flex-row gap-x-2 justify-between items-center w-full z-20
      h-[80px] px-2 md:px-8'
    >
      <MagneticComponent modifier={{ x: 0.25, y: 0.5 }}>
        <CodeBy />
      </MagneticComponent>

      {/* Mobile Nav */}
      <NavLink
        className='ml-auto flex md:hidden cursor-pointer p-4'
        side='left'
        onClick={onOpen}
      >
        <p>Menu</p>
      </NavLink>

      {/* DesktopNav */}
      <div className='flex flex-row gap-x-2'>
        {navLinks.map((link, index) => {
          const isPath = pathname === link.href;
          const { title, href } = link;
          return (
            link.href !== '/' && (
              <NavLink
                key={index}
                className='md:flex hidden cursor-pointer p-4'
                side='bottom'
                isPath={isPath}
                onClick={() => startSplash(href)}
              >
                <p>{title}</p>
              </NavLink>
            )
          );
        })}
      </div>
    </nav>
  );
};
