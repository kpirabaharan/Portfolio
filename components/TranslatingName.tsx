'use client';

// import { Orbitron } from 'next/font/google';

import { useState, useEffect, useRef, useMemo } from 'react';
import { useScrollDirection } from 'react-use-scroll-direction';

// const orbitron = Orbitron({ weight: '800', subsets: ['latin'] });

const TranslatingName = () => {
  const [translateValue, setTranslateValue] = useState<number>(0);
  const middleDivRef = useRef<HTMLDivElement>(null);
  const mainDivRef = useRef<HTMLDivElement>(null);
  const { isScrolling, isScrollingUp, isScrollingDown } = useScrollDirection();
  const [lastScroll, setLastScroll] = useState<'up' | 'down'>('down');

  const [textSize, setTextSize] = useState('10rem');

  useEffect(() => {
    if (isScrollingDown) setLastScroll('down');
    else if (isScrollingUp) setLastScroll('up');
  }, [isScrollingDown, isScrollingUp]);

  useEffect(() => {
    var increment = 0.1;

    if (isScrollingUp || isScrollingDown) increment = 0.2;

    if (lastScroll == 'down') {
      if (translateValue > 100) {
        setTranslateValue(0);
        return;
      }
      setTimeout(() => setTranslateValue((old) => old + increment), 10);
    }
    if (lastScroll === 'up') {
      if (translateValue < -100) {
        setTranslateValue(0);
        return;
      }
      setTimeout(() => setTranslateValue((old) => old - increment), 10);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [translateValue, lastScroll]);

  useEffect(() => {
    const txtSize = 3 + (mainDivRef.current?.clientWidth ?? 0) * 0.006;
    setTextSize(`${txtSize}rem`);
  }, [mainDivRef.current?.clientWidth]);

  return (
    <div ref={mainDivRef} className='relative flex flex-row w-full'>
      <div
        style={{
          position: 'absolute',
          width: middleDivRef.current?.clientWidth,
          transform: `translate(${translateValue - 100}%, 0%)`,
        }}
      >
        <p
          // style={{ ...orbitron.style, fontSize: textSize }}
          style={{ fontSize: textSize }}
          className='text-15xl overflow-x-hidden text-clip whitespace-nowrap leading-relaxed'
        >
          Keeshigan Pirabaharan <span>-</span>
        </p>
      </div>
      <div
        ref={middleDivRef}
        style={{
          transform: `translate(${translateValue}%, 0%)`,
        }}
      >
        <p
          // style={{ ...orbitron.style, fontSize: textSize }}
          style={{ fontSize: textSize }}
          className='text-15xl overflow-x-hidden text-clip whitespace-nowrap leading-relaxed'
        >
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
        <p
          // style={{ ...orbitron.style, fontSize: textSize }}
          style={{ fontSize: textSize }}
          className='overflow-x-hidden text-clip whitespace-nowrap leading-relaxed'
        >
          Keeshigan Pirabaharan <span>-</span>
        </p>
      </div>
    </div>
  );
};

export default TranslatingName;
