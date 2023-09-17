'use client';

import { useState, useEffect, useRef } from 'react';
import useDetectScroll from '@smakss/react-scroll-direction';

const TranslatingName = () => {
  const [translateValue, setTranslateValue] = useState<number>(0);
  const middleDivRef = useRef<HTMLDivElement>(null);
  const scrollDir = useDetectScroll();
  const [lastScrollDir, setLastScrollDir] = useState<'down' | 'up'>('down');

  useEffect(() => {
    if (scrollDir === 'down') {
      setLastScrollDir('down');
    } else if (scrollDir === 'up') {
      setLastScrollDir('up');
    }
  }, [scrollDir]);

  useEffect(() => {
    if (lastScrollDir === 'down') {
      if (translateValue > 100) {
        setTranslateValue(0);
        return;
      }
      setTimeout(() => setTranslateValue((old) => old + 0.1), 10);
    }
    if (lastScrollDir === 'up') {
      if (translateValue < -100) {
        setTranslateValue(0);
        return;
      }
      setTimeout(() => setTranslateValue((old) => old - 0.1), 10);
    }
  }, [translateValue]);

  return (
    <div className='relative flex flex-row w-full'>
      <div
        style={{
          position: 'absolute',
          width: middleDivRef.current?.clientWidth,
          transform: `translate(${translateValue - 100}%, 0%)`,
        }}
      >
        <p className='text-15xl overflow-x-hidden text-clip whitespace-nowrap leading-relaxed'>
          Keeshigan Pirabaharan <span>-</span>
        </p>
      </div>
      <div
        ref={middleDivRef}
        style={{
          transform: `translate(${translateValue}%, 0%)`,
        }}
      >
        <p className='text-15xl overflow-x-hidden text-clip whitespace-nowrap leading-relaxed'>
          Keeshigan Pirabaharan <span>-&nbsp;</span>
        </p>
      </div>
      <div
        style={{
          position: 'absolute',
          left: middleDivRef.current?.clientWidth,
          width: middleDivRef.current?.clientWidth,
          transform: `translate(${translateValue}%, 0%)`,
        }}
      >
        <p className='text-15xl overflow-x-hidden text-clip whitespace-nowrap leading-relaxed'>
          Keeshigan Pirabaharan <span>-</span>
        </p>
      </div>
    </div>
  );
};

export default TranslatingName;
