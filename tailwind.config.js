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
        accent: 'hsl(var(--color-accent) / <alpha-value>)',
        accentLight: 'hsl(var(--color-accent-light) / <alpha-value>)',
        max: 'hsl(var(--color-max) / <alpha-value>)',
        min: 'hsl(var(--color-min) / <alpha-value>)',
        lightest: 'hsl(var(--color-lightest) / <alpha-value>)',
        custom: 'hsl(var(--color-custom) / <alpha-value>)',
        bubble: 'hsl(var(--color-bubble) / <alpha-value>)',
        'hover-accent': 'hsl(var(--color-hover-accent) / <alpha-value>)',
        archive: 'hsl(var(--color-archive) / <alpha-value>)',
      },
      keyframes: tailwindKeyframes,
      animation: {
        'slide-up': 'slide-up 500ms ease-out',
        'outline-hover': 'outline-hover 100ms ease-out',
      },
    },
  },
}
