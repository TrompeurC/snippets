type SqlActionType = 'findAll' | 'findOne' | 'insert' | 'update' | 'del'

interface CategoryType {
  id: number
  name: string
  create_at: string
}

interface ContentType {
  id: number
  title: string
  content: string
  category_id: number
  create_at: string
}
