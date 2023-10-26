'use client';

import { useState, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const SmoothScrollProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <></>;
};

export default SmoothScrollProvider;
