'use client';

import { usePathname, useRouter } from 'next/navigation';

import useNavModal from '@/hooks/useNavModal';
import useSplash from '@/hooks/useSplash';

import MagneticComponent from '@/hoc/MagneticComponent';

import { NavLink } from '@/app/components/navbar/NavLink';
import { CodeBy } from '@/components/CodeBy';

import { navLinks } from '@/constants';

const StandingNavbar = () => {
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
        className='ml-auto flex md:hidden cursor-pointer'
        padding='p-4'
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
                className='md:flex hidden cursor-pointer'
                side='bottom'
                padding={'p-4'}
                isPath={isPath}
                onClick={
                  pathname === href
                    ? () => window.location.assign(href)
                    : () => startSplash(href)
                }
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

export default StandingNavbar;
