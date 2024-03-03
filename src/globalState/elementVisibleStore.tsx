import { create } from 'zustand'

interface ElementVisibleState {
  visibleElement: string
  setVisibleElement: (name: string) => void
}

export const useElementVisibleStore = create<ElementVisibleState>((set) => ({
  visibleElement: '',
  setVisibleElement: (name: string) =>
    set(() => {
      return { visibleElement: name }
    }),
}))
