'use client';

import { useEffect, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';

import { styles } from '@/lib/styles';

import TechIcon from '@/components/TechIcon';


import { techStack } from '@/constants';

const Skills = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  // const canvas = document.createElement('canvas');
  // let gl: WebGLRenderingContext | null;
  // try {
  //   gl =
  //     (canvas.getContext('webgl') as WebGLRenderingContext) ||
  //     (canvas.getContext('experimental-webgl') as WebGLRenderingContext);
  // } catch (err) {
  //   gl = null;
  // }
  return (
    <div className='mt-8 flex h-full flex-col gap-y-8 text-center'>
     
    </div>
  );
};

export default Skills;
