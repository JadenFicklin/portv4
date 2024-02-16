// src/globalState/themeStore.ts

import create from 'zustand'

type ThemeName = 'light' | 'dark' | 'binary' | 'theme4' | 'theme5'

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
        'theme4',
        'theme5',
      ]
      const nextIndex = (themes.indexOf(state.theme) + 1) % themes.length
      return { theme: themes[nextIndex] }
    }),
}))
