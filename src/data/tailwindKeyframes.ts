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
      color: 'hsl(var(--color-min))',
      textShadow: 'none',
    },
    '100%': {
      opacity: '1',
      transform: 'skewX(-18deg)',
      color: 'hsl(var(--color-accent))',
      textShadow:
        '-1px -1px 0 hsl(var(--color-custom)), 1px -1px 0 hsl(var(--color-custom)), -1px 1px 0 hsl(var(--color-custom)), 1px 1px 0 hsl(var(--color-custom))',
    },
  },
}
