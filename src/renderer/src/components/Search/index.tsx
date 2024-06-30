import { Setting } from '@icon-park/react'
import { useSearch } from '@renderer/hooks/useSearch'
import { memo } from 'react'

const Search = memo(() => {
  const { searchValue, handleChange } = useSearch()
  const handleClick = () => {

  }
  return (
    <div className='not-drag p-3  bg-slate-50 drag rounded-xl'>
      <div className='drag '>
        <div className='p-3 bg-slate-200  rounded-xl flex items-center cursor-none '>
          <Setting onClick={handleClick} theme="outline" size="18" fill="#666" className='mr-1 cursor-pointer not-drag' />
          <input autoFocus value={searchValue} onChange={handleChange} type="text" className='bg-slate-200 w-full outline-none px-3  rounded-xl text-slate-500' />
        </div>
        <div className='text-center text-xs text-slate-500 mt-2 select-none'>
          代码片段工具
        </div>
      </div>
    </div>
  )
})

export default Search
