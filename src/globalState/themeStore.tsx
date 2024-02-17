import create from 'zustand'
import { persist } from 'zustand/middleware'

type ThemeName = 'light' | 'dark' | 'binary' | 'cherryBlossom' | 'blueTheme'

interface ThemeState {
  theme: ThemeName
  setTheme: (themeName: ThemeName) => void
  toggleTheme: () => void
}

export const useThemeStore = create(
  persist<ThemeState>(
    (set) => ({
      theme: 'light', // This default value is now overridden by persisted state if available
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
    }),
    {
      name: 'theme-storage', // unique name for the local storage entry
      getStorage: () => localStorage, // specifies localStorage as the storage medium
    },
  ),
)
