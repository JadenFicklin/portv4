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
        // background: '#E1E1E1',
        background: '#ffffff',
        text: '#000000',
        textCounter: '#ffffff',
      },
      keyframes: {
        'slide-up': {
          '0%': {
            opacity: '1',
            transform: 'translateY(100%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0%)',
          },
        },
      },
      animation: {
        'slide-up': 'slide-up 500ms ease-out',
      },
    },
  },
}
