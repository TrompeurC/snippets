import { AllApplication, ApplicationTwo, FolderClose } from '@icon-park/react'
import { FC, memo } from 'react'
import { NavLink } from 'react-router-dom'

interface IProps {
  categorys: CategoryType[]
}

const CategoryList: FC<IProps> = memo(({ categorys }) => {
  return (
    <div className='flex-1 overflow-y-auto w-[160px] border-r-gray-200  border-r box-border'>
      {
        categorys.map((item, index) => (
          <NavLink
            key={item.id} to={`/config/category/contentList/${item.id}`}
            className={
              ({ isActive }) =>
              (isActive ?
                'active block truncate py-1.5  px-2 bg-slate-400 mx-2 rounded-md duration-200 text-white text-center'
                : 'text-center  py-1.5 block truncate px-2 duration-200 hover:bg-slate-200')}>
            <div className='flex items-center gap-2'>
              {
                (index === 0) && <AllApplication theme="outline" size="16" fill="#333" />
              }
              {
                (index === 1) && <ApplicationTwo theme="outline" size="16" fill="#333" />
              }
              {
                (![0, 1].includes(index)) && <FolderClose theme="outline" size="16" fill="#333" />
              }
              <div className='truncate'>{item.name}</div>
            </div>
          </NavLink>
        ))
      }
    </div>
  )
})

export default CategoryList
