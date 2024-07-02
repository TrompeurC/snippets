export default ({ params }) => {
  const { id } = params
  return window.api.sql(`SELECT * FROM contents WHERE category_id = ${id}`, 'findAll',)
}
