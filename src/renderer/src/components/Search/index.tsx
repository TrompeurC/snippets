import { useSearch } from '@renderer/hooks/useSearch'
import { memo } from 'react'

const Search = memo(() => {
  const { searchValue, handleChange } = useSearch()
  return (
    <div className='p-3 bg-slate-50 drag  rounded-xl'>
      <div className='p-3 bg-slate-200 rounded-xl'>
        <input value={searchValue} onChange={handleChange} type="text" className='bg-slate-100 w-full outline-none px-3 py-1 rounded-xl text-slate-500' />
      </div>
    </div>
  )
})

export default Search
