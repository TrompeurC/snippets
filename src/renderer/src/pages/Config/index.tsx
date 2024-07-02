import { memo } from 'react'
import { Outlet } from 'react-router-dom'

const Category = memo(() => {
  return (
    <div className='h-screen'>
      <Outlet />
    </div>
  )
})

export default Category
