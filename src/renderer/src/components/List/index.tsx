import { DataContext } from '@renderer/context/listContext'
import { memo, useContext } from 'react'

const List = memo(() => {
  const { list } = useContext(DataContext)!

  return (
    <div className=' px-3 pt-3 pb-3 rounded-b-xl bg-slate-50 -mt-3 text-slate-400 text-sm'>
      {
        list.map(item => (
          <div className='truncate py-1' key={item.id}>{item.content}</div>
        ))
      }

    </div>
  )
})

export default List
