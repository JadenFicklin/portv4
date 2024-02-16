import { tailwindKeyframes } from './src/data/tailwindKeyframes'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '290px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
      xxl: '1400px',
    },
    extend: {
      colors: {
        // theme one, I have everything in my application set as min, max, accent, and accentLight so we need to change those values depending on what the theme could be, so for example it could be a pink theme instead of what I currently have
        accent: 'var(--color-accent)',
        accentLight: 'var(--color-accent-light)',
        max: 'var(--color-max)',
        min: 'var(--color-min)',
        lightest: 'var(--color-lightest)',
        custom: 'var(--color-custom)',
        bubble: 'var(--color-bubble)',
        hoverAccent: 'var(--color-hoverAccent)',
        archive: 'var(--color-archive)',
      },
      keyframes: tailwindKeyframes,
      animation: {
        'slide-up': 'slide-up 500ms ease-out',
        'outline-hover': 'outline-hover 100ms ease-out',
      },
    },
  },
}
