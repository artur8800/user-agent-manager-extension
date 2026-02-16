import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function concatStrings(...strings: (string | undefined)[]) {
  return strings.filter(Boolean).join(' ');
}
