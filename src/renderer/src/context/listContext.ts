import { Dispatch, SetStateAction, createContext } from "react";

export interface DataType {
  id: number
  content: string
}

export interface DataContextType {
  list: Array<DataType>,
  setList: Dispatch<SetStateAction<DataType[]>>
}

export const DataContext = createContext<DataContextType | null>(null)
