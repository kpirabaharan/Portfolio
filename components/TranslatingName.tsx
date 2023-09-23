'use client';

import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const TranslatingName = () => {
  const [textSize, setTextSize] = useState(
    `${3 + window.innerWidth * 0.006}rem`,
  );

  const firstRef = useRef<HTMLParagraphElement>(null!);
  const secondRef = useRef<HTMLParagraphElement>(null!);
  const sliderRef = useRef<HTMLDivElement>(null!);

  let xPercent = 0;
  let direction = 1;

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
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: '-=300px',
    });
  }, []);

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
    gsap.set(firstRef.current, { xPercent: xPercent });
    gsap.set(secondRef.current, { xPercent: xPercent });
    xPercent += 0.12 * direction;
    requestAnimationFrame(translation);
  };

  return (
    <div ref={sliderRef} className='relative flex whitespace-nowrap'>
      <p
        style={{ fontSize: textSize }}
        ref={firstRef}
        className='m-0 font-bold uppercase'
      >
        Keeshigan Pirabaharan -
      </p>
      <p
        style={{ fontSize: textSize }}
        ref={secondRef}
        className='m-0 font-bold absolute left-full uppercase'
      >
        Keeshigan Pirabaharan -
      </p>
    </div>
  );
};
