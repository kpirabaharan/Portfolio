import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/** Cmd/Ctrl/Shift/Alt-clicks keep native link behaviour (new tab, new window). */
export const isModifiedClick = (e: {
  metaKey: boolean;
  ctrlKey: boolean;
  shiftKey: boolean;
  altKey: boolean;
}) => e.metaKey || e.ctrlKey || e.shiftKey || e.altKey;
