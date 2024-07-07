import { useConfigStore } from "@renderer/store/useConfigStore"
import { ChangeEvent } from "react"

export const useSearch = () => {

  const { searchValue, setSearchValue, setList, setCurrentId } = useConfigStore(state => ({
    searchValue: state.searchValue,
    setSearchValue: state.setSearchValue,
    setList: state.setList,
    setCurrentId: state.setCurrentId
  }))

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value
    setSearchValue(val)
    if (val) {
      const list = await window.api.sql(
        `select * from contents where title like @content limit 6`,
        'findAll',
        { content: `%${val}%` }
      ) as ContentType[]
      console.log(list)
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
