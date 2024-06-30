import { data } from "@renderer/data"
import { useConfigStore } from "@renderer/store/useConfigStore"
import { ChangeEvent } from "react"

export const useSearch = () => {

  const { searchValue, setSearchValue, setList, setCurrentId } = useConfigStore()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value
    setSearchValue(val)
    if (val) {
      const list = data.filter(item => item.content.toLowerCase().includes(val.toLowerCase()))
      setList(list)
      list[0] && setCurrentId(list[0].id)
    } else {
      setList([])
    }
  }

  return {
    searchValue, setSearchValue, setList, handleChange
  }
}
