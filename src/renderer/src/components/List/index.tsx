import { memo } from 'react'
import style from './style.module.css'
import cn from 'classnames'
import { useList } from '@renderer/hooks/useList'

const List = memo(() => {
  const { list, currentId, copy } = useList()
  return (
    !!list.length && (<div className={style.list}>
      {
        list.map((item) => (
          <div onClick={() => copy(item)} className={cn([style['list-item'], { [style.active]: currentId === item.id }])} key={item.id}>{item.title}</div>
        ))
      }
    </div >)
  )
})

export default List
