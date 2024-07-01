import { memo } from 'react'
import Search from '@renderer/components/Search'
import List from '@renderer/components/List'

const Home = memo(() => {
  return (
    <div>
      <Search />
      <List />
    </div>
  )
})

export default Home
