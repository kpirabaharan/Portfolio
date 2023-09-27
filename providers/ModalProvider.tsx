'use client';

import { useEffect, useState } from 'react';

import { NavModal } from '@/app/components/navbar/NavModal';
import SplashIn from '@/app/components/SplashIn';

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <NavModal />
      <SplashIn />
    </>
  );
};

export default ModalProvider;
