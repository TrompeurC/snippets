import { redirect } from "react-router-dom"

export default async ({ request }) => {
  const method = request.method
  const formData = await request.formData();
  const data = Object.fromEntries(formData)
  switch (method) {
    case 'POST':
      window.api.sql("INSERT INTO category (name,create_at) VALUES ('新建类别', datetime())", 'insert')
      break
    case 'PUT':
      window.api.sql(`UPDATE category SET name=@name WHERE id=@id;`, 'update', data)
      redirect('/config/category/contentList/0')
      break
  }
  return {}
}
