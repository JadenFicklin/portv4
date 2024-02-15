export const tailwindKeyframes = {
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
  'outline-hover': {
    '0%': {
      opacity: '1',
      transform: 'skewX(0)',
      color: '#ffffff',
      textShadow: 'none',
    },
    '100%': {
      opacity: '1',
      transform: 'skewX(-18deg)',
      color: '#000000',
      textShadow:
        '-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff',
    },
  },
}
