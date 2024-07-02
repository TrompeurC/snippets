import { memo } from 'react'
import Content from '../Content'
import { Outlet } from 'react-router-dom'
import { AddOne, Config } from '@icon-park/react'

const Category = memo(() => {
  return (
    <div className='h-screen flex flex-col'>
      <div className='flex justify-between'>
        <div className='flex gap-2 p-2'>
          <AddOne theme="outline" title='添加类别' className='cursor-pointer' size="20" fill="#333" />
          <Config theme="outline" title='配置' className='cursor-pointer' size="20" fill="#333" />
        </div>
      </div>
      <div className='flex flex-1'>
        <div className='h-full w-[120px] border-r-gray-200  border-r box-border'>
          category
        </div>
        <div className='flex-1'>

          <Outlet />
        </div>
      </div>

    </div>
  )
})

export default Category
