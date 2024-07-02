export default ({ params }) => {
  const { id } = params
  return window.api.sql(`SELECT * FROM contents WHERE id = ${id}`, 'findAll',)
}
