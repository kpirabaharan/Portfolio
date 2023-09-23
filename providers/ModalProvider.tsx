'use client';

import { useEffect, useState } from 'react';

import { NavModal } from '@/components/navbar/NavModal';

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
    </>
  );
};

export default ModalProvider;
