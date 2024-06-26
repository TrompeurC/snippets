import { DataContext } from '@renderer/context/listContext'
import { data } from '@renderer/data'
import { ChangeEvent, memo, useContext, useState } from 'react'

const Search = memo(() => {
  const [value, setValue] = useState('')
  const { setList } = useContext(DataContext)!

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value
    setValue(val)
    if (val) {
      setList(data.filter(item => item.content.toLowerCase().includes(val.toLowerCase())))
    } else {
      setList(data)
    }
  }

  return (
    <div className='p-3 bg-slate-50 drag  rounded-xl'>
      <div className='p-3 bg-slate-200 rounded-xl'>
        <input value={value} onChange={handleChange} type="text" className='bg-slate-100 w-full outline-none px-3 py-1 rounded-xl text-slate-500' />
      </div>
    </div>
  )
})

export default Search
