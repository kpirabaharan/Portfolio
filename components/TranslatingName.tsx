'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

const NAME = ' Keeshigan Pirabaharan —';

// Endless marquee that speeds up and flips direction with the scroll.
export const TranslatingName = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<HTMLParagraphElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let xPercent = 0;
    let direction = 1;
    let frame = 0;

    const ctx = gsap.context(() => {
      gsap.to(sliderRef.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          start: 0,
          end: window.innerHeight,
          scrub: 0.25,
          onUpdate: e => {
            direction = e.direction * -1;
          },
        },
        x: '-=300px',
      });
    });

    const translate = () => {
      if (xPercent <= -100) xPercent = 0;
      if (xPercent > 0) xPercent = -100;
      gsap.set(textRefs.current, { xPercent });
      xPercent -= 0.03 * direction;
      frame = requestAnimationFrame(translate);
    };
    frame = requestAnimationFrame(translate);

    return () => {
      cancelAnimationFrame(frame);
      ctx.revert();
    };
  }, []);

  const positions = ['absolute -left-full', 'relative', 'absolute left-full'];

  return (
    <div
      ref={sliderRef}
      aria-hidden
      className='relative flex w-max items-center text-[calc(3rem+9.6vw)] leading-none font-bold whitespace-nowrap text-muted-foreground uppercase'
    >
      {positions.map((position, i) => (
        <p
          key={i}
          ref={el => {
            if (el) textRefs.current[i] = el;
          }}
          className={`${position} m-0`}
        >
          {NAME}
        </p>
      ))}
    </div>
  );
};
