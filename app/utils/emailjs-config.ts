import { init } from '@emailjs/browser';

export const initEmailJS = () => {
  init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '');
}; 