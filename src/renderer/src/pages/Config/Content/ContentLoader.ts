import dayjs from "dayjs"

export default async ({ params }) => {
  const { id } = params
  const categoryList = await window.api.sql('SELECT * FROM category ORDER BY create_at DESC', 'findAll') as CategoryType[]
  categoryList.unshift({
    id: 0,
    create_at: dayjs().format('YYYY-MM-DD'),
    name: '全部'
  }, {
    id: -1,
    create_at: dayjs().format('YYYY-MM-DD'),
    name: '未分类'
  })
  const contentData = await window.api.sql(`SELECT * FROM contents WHERE id = ${id}`, 'findAll',) as ContentType[]
  return {
    contentData: contentData[0],
    categoryList
  }
}
