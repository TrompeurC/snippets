import { DataType } from '@renderer/context/listContext'
import { create } from 'zustand'

interface IState {
  list: Array<DataType>
  setList: (list: Array<DataType>) => void
  searchValue: string
  setSearchValue: (val: string) => void
  currentId: number
  setCurrentId: (id: number) => void
}

export const useConfigStore = create<IState>((set) => ({
  list: [],
  setList: (list) => set({ list }),
  searchValue: '',
  setSearchValue: (searchValue) => set({ searchValue }),
  currentId: -1,
  setCurrentId: (currentId) => set({ currentId }),
}))
