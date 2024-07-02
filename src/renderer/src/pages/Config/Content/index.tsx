import { memo } from 'react'

const Content = memo(() => {
  return (
    <div className='flex h-full'>
      <div className='h-full w-[150px] border-r box-border border-r-gray-200'>
        title
      </div>
      <div className='flex-1'>
        content
      </div>
    </div>
  )
})

export default Content
