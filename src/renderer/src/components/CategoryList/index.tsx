import { FolderClose } from '@icon-park/react'
import { FC, memo } from 'react'
import { NavLink } from 'react-router-dom'

interface IProps {
  categorys: CategoryType[]
}

const CategoryList: FC<IProps> = memo(({ categorys }) => {
  return (
    <div className='flex-1 overflow-y-auto w-[160px] border-r-gray-200  border-r box-border'>
      {
        categorys.map(item => (
          <NavLink
            key={item.id} to={`/config/category/contentList/${item.id}`}
            className={
              ({ isActive }) =>
              (isActive ?
                'active block truncate px-2 bg-slate-400 mx-2 rounded-md duration-200 text-white text-center'
                : 'text-center block truncate px-2 duration-200')}>
            <div className='flex items-center gap-2'>
              <FolderClose theme="outline" size="16" fill="#333" />
              <div className='truncate'>{item.name}</div>
            </div>
          </NavLink>
        ))
      }
    </div>
  )
})

export default CategoryList
