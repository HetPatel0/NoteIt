import { clsx, type ClassValue } from "clsx"
import { error } from "console"
import { Erica_One } from "next/font/google"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const handleError = (error:unknown )=>{
  if (error instanceof Error ) {
    return {errorMessage:error.message}

  }else{
    return {errorMessage:"An error occured"};

  }
}