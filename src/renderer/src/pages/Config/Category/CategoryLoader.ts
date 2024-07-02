export default () => {
  return window.api.sql('SELECT * FROM category', 'findAll')
}
