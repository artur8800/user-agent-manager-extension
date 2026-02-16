import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function concatStrings(...strings: (string | undefined)[]) {
  const result = strings.filter(Boolean).join(' ');
  return result.length > 1 ? result : '-';
}
