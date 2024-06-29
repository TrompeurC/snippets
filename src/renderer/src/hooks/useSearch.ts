import { data } from "@renderer/data"
import { useConfigStore } from "@renderer/store/useConfigStore"
import { ChangeEvent } from "react"

export const useSearch = () => {

  const { searchValue, setSearchValue, setList } = useConfigStore()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value
    setSearchValue(val)
    if (val) {
      setList(data.filter(item => item.content.toLowerCase().includes(val.toLowerCase())))
    } else {
      setList([])
    }
  }

  return {
    searchValue, setSearchValue, setList, handleChange
  }
}
