import { redirect } from "react-router-dom"

export default async ({ params, request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData || [])
  const cid = params.cid || 0
  switch (request.method) {
    case 'POST': {
      const id = await window.api.sql(
        `insert into contents (title,content,category_id,create_at) values('未命名片段','',${cid},datetime())`,
        'insert'
      )
      return redirect(`content/${id}`)
    }
    case 'DELETE': {
      return await window.api.sql(`delete from contents where id=${data.id}`, 'del')
    }
  }

  return {}
}
