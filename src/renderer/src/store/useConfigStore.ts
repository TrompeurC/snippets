import { create } from 'zustand'

interface IState {
  list: Array<ContentType>
  setList: (list: Array<ContentType>) => void
  searchValue: string
  setSearchValue: (val: string) => void
  currentId: number
  setCurrentId: (id: number) => void
  currentCategory: number
  setCurrentCategory: (id: number) => void
}

export const useConfigStore = create<IState>((set) => ({
  list: [],
  setList: async (list) => set({ list }),
  searchValue: '',
  setSearchValue: (searchValue) => set({ searchValue }),
  currentId: -1,
  setCurrentId: (currentId) => set({ currentId }),
  currentCategory: -2,
  setCurrentCategory: (currentCategory) => set({ currentCategory })
}))
