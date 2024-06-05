'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';

export const TranslatingName = () => {
  const [textSize, setTextSize] = useState<string>('');

  const zeroRef = useRef<HTMLParagraphElement>(null!);
  const firstRef = useRef<HTMLParagraphElement>(null!);
  const secondRef = useRef<HTMLParagraphElement>(null!);
  const sliderRef = useRef<HTMLDivElement>(null!);

  let xPercent = 0;
  let direction = 1;

  // Move Text Faster When Scrolling and Switch Directions on Scroll
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(translation);

    gsap.to(sliderRef.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.25,
        // eslint-disable-next-line react-hooks/exhaustive-deps
        onUpdate: e => (direction = e.direction * -1),
      },
      x: '-=300px',
    });
  }, []);

  useEffect(() => {
    const txtSize = 3 + window.innerWidth * 0.006;
    setTextSize(`${txtSize}rem`);
  }, []);

  // Adjust Text Size on Resize Window
  useEffect(() => {
    const handleResize = () => {
      const txtSize = 3 + window.innerWidth * 0.006;
      setTextSize(`${txtSize}rem`);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const translation = () => {
    if (xPercent <= -100) xPercent = 0;
    if (xPercent > 0) xPercent = -100;
    gsap.set(zeroRef.current, { xPercent: xPercent });
    gsap.set(firstRef.current, { xPercent: xPercent });
    gsap.set(secondRef.current, { xPercent: xPercent });
    xPercent += 0.03 * direction;
    requestAnimationFrame(translation);
  };

  return (
    <div
      ref={sliderRef}
      className='relative flex items-center whitespace-nowrap text-center text-muted-foreground'
    >
      <p
        style={{ fontSize: textSize }}
        ref={zeroRef}
        className='absolute -left-full m-0 font-bold uppercase leading-none'
      >
        &nbsp;Keeshigan Pirabaharan -
      </p>
      <p
        style={{ fontSize: textSize }}
        ref={firstRef}
        className='m-0 font-bold uppercase leading-none'
      >
        &nbsp;Keeshigan Pirabaharan -
      </p>
      <p
        style={{ fontSize: textSize }}
        ref={secondRef}
        className='absolute left-full m-0 font-bold uppercase leading-none'
      >
        &nbsp;Keeshigan Pirabaharan -
      </p>
    </div>
  );
};
