'use client';

import Lenis from 'lenis';
import { useEffect } from 'react';

const SmoothScrollProvider = () => {
  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true });
    return () => lenis.destroy();
  }, []);

  return null;
};

export default SmoothScrollProvider;
