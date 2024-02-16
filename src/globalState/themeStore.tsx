// src/globalState/themeStore.ts

import create from 'zustand'

type ThemeName = 'light' | 'dark' | 'binary' | 'chrerryBlossom' | 'blueTheme'

interface ThemeState {
  theme: ThemeName
  toggleTheme: () => void
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: 'light', // default theme
  toggleTheme: () =>
    set((state) => {
      const themes: ThemeName[] = [
        'light',
        'dark',
        'binary',
        'chrerryBlossom',
        'blueTheme',
      ]
      const nextIndex = (themes.indexOf(state.theme) + 1) % themes.length
      return { theme: themes[nextIndex] }
    }),
}))
