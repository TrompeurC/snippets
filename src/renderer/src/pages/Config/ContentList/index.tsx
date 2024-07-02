import { memo, useEffect } from 'react'
import dayjs from 'dayjs'
import { NavLink, Outlet, useLoaderData, useNavigate } from 'react-router-dom'

const ContentList = memo(() => {
  const contentList = useLoaderData() as ContentType[]
  const navigate = useNavigate()
  useEffect(() => {
    const current = contentList[0]
    current && navigate(`/config/category/contentList/${current.category_id}/content/${current.id}`)
  }, [contentList])
  return (
    <div className='flex h-full max-h-max'>
      <div className='h-full overflow-auto w-[240px] border-r box-border border-r-gray-200'>
        {
          contentList.map(item => (
            <NavLink key={item.id} to={`/config/category/contentList/${item.category_id}/content/${item.id}`} className={({ isActive }) => (isActive ? 'active block truncate px-2 bg-slate-400 mx-2 rounded-md duration-200 text-white text-center' : 'text-center block truncate px-2 duration-200')}>
              <div className='flex flex-col'>
                <div className='text-sm truncate'>{item.title}</div>
                <div className='text-left opacity-70 text-[12px]'>{dayjs(item.create_at).format('YYYY/MM/DD')}</div>
              </div>
            </NavLink>
          ))
        }
      </div>
      <div className='flex-1'>
        <Outlet />
      </div>
    </div>
  )
})

export default ContentList
