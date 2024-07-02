import { memo, useEffect } from 'react'
import { NavLink, Outlet, useLoaderData, useNavigate } from 'react-router-dom'
import { AddOne, Config, FolderClose } from '@icon-park/react'

const Category = memo(() => {
  const categorys = useLoaderData() as CategoryType[]
  const navigate = useNavigate()

  useEffect(() => {
    console.log(`/config/category/contentList/${categorys[0].id}`)
    categorys[0] && navigate(`/config/category/contentList/${categorys[0].id}`)
  }, [])
  return (
    <div className='h-screen flex flex-col max-h-screen'>
      <div className='flex flex-col justify-between border-b border-r-gray-200'>
        <div className='flex gap-2  p-2'>
          <AddOne theme="outline" title='添加类别' className='cursor-pointer' size="20" fill="#333" />
          <Config theme="outline" title='配置' className='cursor-pointer' size="20" fill="#333" />
        </div>
      </div>
      <div className='flex h-max max-h-full'>
        <div className='overflow-y-auto w-[160px] border-r-gray-200  border-r box-border'>
          {
            categorys.map(item => (
              <NavLink key={item.id} to={`/config/category/contentList/${item.id}`} className={({ isActive }) => (isActive ? 'active block truncate px-2 bg-slate-400 mx-2 rounded-md duration-200 text-white text-center' : 'text-center block truncate px-2 duration-200')}>
                <div className='flex items-center gap-2'>
                  <FolderClose theme="outline" size="16" fill="#333" />
                  <div className='truncate'>{item.name}</div>
                </div>
              </NavLink>
            ))
          }
        </div>
        <div className='flex-1'>
          <Outlet />
        </div>
      </div>

    </div>
  )
})

export default Category
