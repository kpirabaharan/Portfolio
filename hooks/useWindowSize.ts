'use client';

import { useSyncExternalStore } from 'react';

const subscribe = (onChange: () => void) => {
  window.addEventListener('resize', onChange);
  return () => window.removeEventListener('resize', onChange);
};

const getWidth = () => window.innerWidth;
const getHeight = () => window.innerHeight;
const getServerSize = () => 0;

// [width, height] of the window; [0, 0] during server render and hydration.
const useWindowSize = (): [number, number] => {
  const width = useSyncExternalStore(subscribe, getWidth, getServerSize);
  const height = useSyncExternalStore(subscribe, getHeight, getServerSize);
  return [width, height];
};

export default useWindowSize;
