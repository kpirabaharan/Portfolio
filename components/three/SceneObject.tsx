'use client';

import dynamic from 'next/dynamic';
import { useSyncExternalStore } from 'react';

import { hasWebGL } from '@/lib/webgl';

import type { SceneVariant } from './Scene';

// three.js only runs in the browser; keep it out of the server bundle.
const Scene = dynamic(() => import('./Scene'), { ssr: false });

const subscribe = () => () => {};

interface SceneObjectProps {
  variant?: SceneVariant;
  className?: string;
}

export const SceneObject = ({ variant, className }: SceneObjectProps) => {
  const supported = useSyncExternalStore(subscribe, hasWebGL, () => false);

  // Without WebGL the page falls back to the CSS grid and glow behind it.
  if (!supported) return null;

  return <Scene variant={variant} className={className} />;
};
