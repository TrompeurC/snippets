import { memo } from 'react'
import { useLoaderData } from 'react-router-dom'

const Content = memo(() => {
  const contentData = (useLoaderData() as ContentType[])[0]
  return (
    <div className='flex h-full flex-col gap-2 px-2'>
      <p>{contentData.title}</p>
      <p>{contentData.content}</p>
    </div>
  )
})

export default Content
