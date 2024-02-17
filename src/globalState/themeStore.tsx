import create from 'zustand'

type ThemeName = 'light' | 'dark' | 'binary' | 'cherryBlossom' | 'blueTheme'

interface ThemeState {
  theme: ThemeName
  setTheme: (themeName: ThemeName) => void
  toggleTheme: () => void
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: 'light', // default theme
  setTheme: (themeName) => set({ theme: themeName }),
  toggleTheme: () =>
    set((state) => {
      const themes: ThemeName[] = [
        'light',
        'dark',
        'binary',
        'cherryBlossom',
        'blueTheme',
      ]
      const nextIndex = (themes.indexOf(state.theme) + 1) % themes.length
      return { theme: themes[nextIndex] }
    }),
}))
