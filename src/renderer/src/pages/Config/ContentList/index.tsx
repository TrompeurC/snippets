import dayjs from 'dayjs'
import { NavLink, Outlet, useLoaderData, useSubmit } from 'react-router-dom'
import ContentListButtons from '@renderer/components/ContentListButtons';

const ContentList = (() => {
  const contentList = useLoaderData() as ContentType[]
  const submit = useSubmit()


  const handleContextMenu = (id: number) => {
    window.electron.ipcRenderer.invoke('contextMenu', id)
  }
  window.electron.ipcRenderer.on('refresh', () => {
    submit(null, { method: 'GET' })
  })

  return (
    <div className='flex h-full'>
      <div className='flex flex-col'>
        <ContentListButtons />
        <div className='flex-1 overflow-auto w-[240px] border-r box-border border-r-gray-200'>
          {
            contentList.map(item => (
              <NavLink key={item.id} to={`/config/category/contentList/${item.category_id}/content/${item.id}`} className={({ isActive }) => (isActive ? 'active block truncate px-2 bg-slate-400 mx-2 rounded-md duration-200 text-white text-center' : 'text-center block truncate px-2 duration-200')}>
                <div className='flex flex-col'>
                  <div className='text-sm gap-2  flex justify-between' onContextMenu={() => handleContextMenu(item.id)}>
                    <span className='truncate'>{item.title}</span>
                    <span className='text-left opacity-70 text-[12px]'>{dayjs(item.create_at).format('YYYY/MM/DD')}</span>
                  </div>
                </div>
              </NavLink>
            ))
          }
        </div>
      </div>
      <div className='flex-1'>
        <Outlet />
      </div>
    </div>
  )
})

export default ContentList
