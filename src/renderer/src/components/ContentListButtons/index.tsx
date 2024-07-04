import { AddFour } from '@icon-park/react'
import { Button, Input } from 'antd'
import { memo } from 'react'
import { Form, useSubmit } from 'react-router-dom'

const ContentListButtons = memo(() => {
  const submit = useSubmit()
  const handleAdd = () => {
    submit(null, { method: 'POST' })
  }

  return (
    <Form className='flex gap-2 px-1 my-2 pr-4'>
      <Input name="searchWord" placeholder="搜索" onChange={(e) => submit(e.target.form)} />
      <Button onClick={handleAdd}  >
        <AddFour theme="outline" size="12" fill="#333" />
      </Button>
    </Form>
  )
})

export default ContentListButtons
