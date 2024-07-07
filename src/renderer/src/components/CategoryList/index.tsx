import { AllApplication, ApplicationTwo, FolderClose } from '@icon-park/react'
import { useConfigStore } from '@renderer/store/useConfigStore'
import { Input } from 'antd'
import { FC, KeyboardEvent, memo } from 'react'
import { NavLink, useFetcher } from 'react-router-dom'

interface IProps {
  categorys: CategoryType[]
}

const CategoryList: FC<IProps> = memo(({ categorys }) => {
  // const navigate = useNavigate()
  const fetcher = useFetcher()
  const currentCategory = useConfigStore(state => state.currentCategory)
  const setCurrentCategory = useConfigStore(state => state.setCurrentCategory)
  const handleContextMenu = (id: number) => {
    if ([0, -1].includes(id)) return
    window.electron.ipcRenderer.invoke('contextMenu', id, 'category')
  }
  window.electron.ipcRenderer.on('refresh', () => {
    fetcher.submit(null, { method: 'GET' })
  })
  const handleDbClick = (id: number) => {
    if ([0, -1].includes(id)) return
    setCurrentCategory(id)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, item: CategoryType) => {
    if (e.key === 'Enter') {
      fetcher.submit({ id: item.id, name: (e.target as HTMLInputElement).value }, { method: "PUT" })
      setCurrentCategory(-2)
    }
  }

  return (
    <div className='flex-1 overflow-y-auto w-[160px] border-r-gray-200  border-r box-border'>
      {
        categorys.map((item, index) => (
          currentCategory === item.id ? <div key={item.id} className='mx-2 box-border'>
            <Input defaultValue={item.name} onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => handleKeyDown(e, item)} />
          </div> :
            <NavLink
              onDoubleClick={() => handleDbClick(item.id)}
              key={item.id} to={`/config/category/contentList/${item.id}`}
              onContextMenu={() => handleContextMenu(item.id)}
              className={
                ({ isActive }) =>
                (isActive ?
                  'active block truncate py-1.5  px-2 bg-slate-400 mx-2 rounded-md duration-200 text-white text-center'
                  : 'text-center  py-1.5 block truncate px-2 duration-200 hover:bg-slate-200 rounded-md mx-2')}>
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
