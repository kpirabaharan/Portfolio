'use client';

import { usePathname } from 'next/navigation';

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
    <nav className='z-20 flex h-[80px] w-full flex-row items-center justify-between gap-x-2 px-2 md:px-8 text-white'>
      <MagneticComponent modifier={{ x: 0.25, y: 0.5 }}>
        <CodeBy />
      </MagneticComponent>

      {/* Mobile Nav */}
      <NavLink
        className='ml-auto flex cursor-pointer md:hidden'
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
                className='hidden cursor-pointer md:flex'
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
