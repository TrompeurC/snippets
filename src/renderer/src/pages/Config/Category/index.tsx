import { useEffect } from 'react'
import { Outlet, useFetcher, useLoaderData, useNavigate } from 'react-router-dom'
import { AddOne, Config } from '@icon-park/react'
import CategoryList from '@renderer/components/CategoryList'

const Category = (() => {
  const categorys = useLoaderData() as CategoryType[]
  const navigate = useNavigate()
  const fetcher = useFetcher()

  const handleAdd = () => {
    fetcher.submit(null, { method: 'POST' })
  }

  useEffect(() => {
    categorys[0] && navigate(`/config/category/contentList/${categorys[0].id}`)
  }, [categorys])
  return (
    <div className='h-screen flex flex-col max-h-screen text-slate-600'>
      <div className='flex flex-1 overflow-auto'>
        <div className='flex flex-col'>
          <CategoryList categorys={categorys} />
          <div className='bg-white sticky bottom-0 flex flex-col justify-between border-b border-r-gray-200'>
            <div className='flex gap-2  p-2'>
              <AddOne theme="outline" title='添加类别' className='cursor-pointer' size="20" fill="#333" onClick={handleAdd} />
              {/* <Config theme="outline" title='配置' className='cursor-pointer' size="20" fill="#333" /> */}
            </div>
          </div>
        </div>
        <div className='flex-1'>
          <Outlet />
        </div>
      </div>

    </div>
  )
})

export default Category
