import { memo, useEffect } from 'react'
import dayjs from 'dayjs'
import { Form, NavLink, Outlet, useLoaderData, useNavigate, useSubmit } from 'react-router-dom'
import { Button, Input } from 'antd'
import { AddFour } from '@icon-park/react';

const ContentList = (() => {
  const contentList = useLoaderData() as ContentType[]
  const submit = useSubmit()

  const handleAdd = () => {
    submit(null, { method: 'POST' })
  }

  const handleContextMenu = (id: number) => {
    window.electron.ipcRenderer.invoke('contextMenu', id)
  }
  window.electron.ipcRenderer.on('refresh', () => {
    submit(null, { method: 'GET' })
  })

  return (
    <div className='flex h-full'>
      <div className='flex flex-col'>
        <Form className='flex gap-2 px-1 my-2 pr-4'>
          <Input name="searchWord" placeholder="搜索" onChange={(e) => submit(e.target.form)} />
          <Button onClick={handleAdd}  >
            <AddFour theme="outline" size="12" fill="#333" />
          </Button>
        </Form>
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
