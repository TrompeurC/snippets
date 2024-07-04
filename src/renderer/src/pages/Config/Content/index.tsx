import { memo } from 'react'
import { Form, useLoaderData, useSubmit } from 'react-router-dom'

const Content = memo(() => {
  const { contentData, categoryList } = useLoaderData() as {
    contentData: ContentType,
    categoryList: CategoryType[]
  };
  const submit = useSubmit()
  return (
    <Form method='PUT' key={contentData.id} className='flex h-full flex-col gap-2 p-2'>
      <input name='title' className='w-full' defaultValue={contentData.title} onChange={e => submit(e.target.form)}></input>
      <input hidden name='id' className='w-full' defaultValue={contentData.id} ></input>
      <select
        className='max-w-md'
        name='category_id'
        defaultValue={contentData.category_id}
        onChange={(e) => {
          submit(e.target.form)
        }}
      >
        {categoryList.map(item => (
          <option key={item.id} value={item.id}>{item.name}</option>
        ))}
      </select>
      <textarea name='content' className='flex-1' defaultValue={contentData.content} onChange={e => submit(e.target.form)}></textarea>
    </Form>
  );
});

export default Content
