import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type ThemeName = 'light' | 'dark' | 'binary' | 'cherryBlossom' | 'blueTheme'

interface ThemeState {
  theme: ThemeName
  setTheme: (themeName: ThemeName) => void
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: 'light',
      setTheme: (themeName) => set({ theme: themeName }),
    }),
    {
      name: 'theme-storage',
      getStorage: () => localStorage,
    },
  ),
)
