'use client';

import { useEffect, useState } from 'react';

type Step = string | number;

interface TypewriterProps {
  /** Phrases to type, with numbers as pauses in ms. Loops forever. */
  sequence: Step[];
  className?: string;
  typeDelay?: number;
  deleteDelay?: number;
}

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Each keystroke lands at 50–150% of the base delay, like a person typing.
const jitter = (ms: number) => ms * (0.5 + Math.random());

const sharedPrefixLength = (a: string, b: string) => {
  let i = 0;
  while (i < a.length && i < b.length && a[i] === b[i]) i++;
  return i;
};

/**
 * Types through phrases, deleting back to the prefix they share. The whole
 * phrase is always laid out — the untyped remainder is just invisible — so
 * line wrapping is decided once per phrase and characters appear in place
 * instead of words jumping between lines as the text grows.
 *
 * Don't combine with `text-wrap: balance`: Chrome balances the split
 * visible/invisible text inconsistently, which brings the jumping back.
 */
export const Typewriter = ({
  sequence,
  className,
  typeDelay = 50,
  deleteDelay = 25,
}: TypewriterProps) => {
  const [phrase, setPhrase] = useState(
    () => sequence.find(step => typeof step === 'string') ?? '',
  );
  const [count, setCount] = useState(0);

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      let current = '';
      let shown = 0;

      while (!cancelled) {
        for (const step of sequence) {
          if (typeof step === 'number') {
            await sleep(step);
            if (cancelled) return;
            continue;
          }

          // Erase back to the shared prefix, still laid out as the old phrase.
          const keep = sharedPrefixLength(current, step);
          while (shown > keep) {
            await sleep(jitter(deleteDelay));
            if (cancelled) return;
            setCount(--shown);
          }

          current = step;
          setPhrase(step);
          while (shown < step.length) {
            await sleep(jitter(typeDelay));
            if (cancelled) return;
            setCount(++shown);
          }
        }
      }
    };

    void run();
    return () => {
      cancelled = true;
    };
  }, [sequence, typeDelay, deleteDelay]);

  return (
    <span className={className}>
      <span className='sr-only'>{phrase}</span>
      <span aria-hidden>
        {phrase.slice(0, count)}
        <span className='invisible'>{phrase.slice(count)}</span>
      </span>
    </span>
  );
};
