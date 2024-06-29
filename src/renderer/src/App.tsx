import { memo } from 'react'
import Search from './components/Search'
import List from './components/List'
import * as utils from '@renderer/utils'

const App = memo(() => {
  setTimeout(() => {
    utils.shortCut('search', 'CommandOrControl+shift+;')
  })
  return (
    <div>
      {/* <DataContext.Provider value={{ list, setList }}> */}
      <Search />
      <List />
      {/* </DataContext.Provider> */}
    </div>
  )
})

export default App
