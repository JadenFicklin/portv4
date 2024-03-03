import { create } from 'zustand'

interface ElementsLocationState {
  about: number
  work: number
  contact: number
  archive: number
  setAbout: (position: number) => void
  setWork: (position: number) => void
  setContact: (position: number) => void
  setArchive: (position: number) => void
}

export const useElementsLocationStore = create<ElementsLocationState>(
  (set) => ({
    about: 0,
    work: 0,
    archive: 0,
    contact: 0,
    setAbout: (position) => set({ about: position }),
    setWork: (position) => set({ work: position }),
    setArchive: (position) => set({ archive: position }),
    setContact: (position) => set({ contact: position }),
  }),
)
