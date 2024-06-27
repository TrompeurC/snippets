import { DataContext } from '@renderer/context/listContext'
import { memo, useContext, useEffect, useState } from 'react'
import style from './style.module.css'
import cn from 'classnames'

const List = memo(() => {
  const { list } = useContext(DataContext)!
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleKeydown = (e: KeyboardEvent) => {
    if (list.length === 0) return
    switch (e.key) {
      case "ArrowUp":
        setCurrentIndex(prev => prev - 1 < 0 ? list.length : prev - 1)
        break
      case "ArrowDown":
        setCurrentIndex(prev => prev + 1 >= list.length ? 0 : prev + 1)
        break
      case "Enter":
        navigator.clipboard.writeText(list[currentIndex].content)
        break
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeydown)
    return () => {
      document.removeEventListener('keydown', handleKeydown)
    }
  }, [list, currentIndex])

  return (
    <div className={style.list}>
      {
        list.map((item, index) => (
          <div className={cn([style['list-item'], { [style.active]: currentIndex === index }])} key={item.id}>{item.content}</div>
        ))
      }
    </div >
  )
})

export default List
