import clsx from 'clsx';
import { ClassNameValue, twMerge } from 'tailwind-merge';

export function clmx(...classes:(string|ClassNameValue)[]){
    return twMerge(clsx(classes));
}