import { memo } from 'react'
import { Outlet } from 'react-router-dom'

const Config = memo(() => {
  return (
    <div className='h-screen'>
      <Outlet />
    </div>
  )
})

export default Config
