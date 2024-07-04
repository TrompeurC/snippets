import dayjs from "dayjs"

export default async () => {
  const res = await window.api.sql('SELECT * FROM category ORDER BY create_at DESC', 'findAll') as CategoryType[]
  res.unshift({
    id: 0,
    create_at: dayjs().format('YYYY-MM-DD'),
    name: '全部'
  }, {
    id: -1,
    create_at: dayjs().format('YYYY-MM-DD'),
    name: '未分类'
  })
  return res
}
