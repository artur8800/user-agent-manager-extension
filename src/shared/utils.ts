import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function concatStrings(separator: string, ...strings: (string | undefined)[]) {
  const result = strings.filter(Boolean).join(separator);
  return result.length > 1 ? result : '-';
}
