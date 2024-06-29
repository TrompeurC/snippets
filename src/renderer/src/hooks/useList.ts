import { DataType } from "@renderer/context/listContext"
import { useConfigStore } from "@renderer/store/useConfigStore"
import { hiddenWindow } from "@renderer/utils"
import { useCallback, useEffect } from "react"


export const useList = () => {
  const { list, currentId, setCurrentId, setList, setSearchValue } = useConfigStore()

  const handleKeydown = useCallback((e: KeyboardEvent) => {
    if (list.length === 0) return
    const index = list.findIndex(item => item.id === currentId)
    switch (e.key) {
      case "ArrowUp":
        setCurrentId(index === 0 ? list[list.length - 1].id : list[index - 1].id)
        break
      case "ArrowDown":
        setCurrentId(index === list.length - 1 ? list[0].id : list[index + 1].id)
        break
      case "Enter":
        if (currentId === -1) return
        const item = list.find(item => item.id === currentId)!
        copy(item)
        break
    }
  }, [list, currentId])

  const copy = (item: DataType) => {
    setSearchValue('')
    setList([])
    navigator.clipboard.writeText(item.content)
    hiddenWindow()
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeydown)
    return () => {
      document.removeEventListener('keydown', handleKeydown)
    }
  }, [handleKeydown])

  return {
    list, currentId, copy
  }
}
