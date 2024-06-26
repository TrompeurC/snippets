import { memo, useState } from 'react'
import Search from './components/Search'
import List from './components/List'
import { data } from './data'
import { DataContext, DataType } from './context/listContext'

const App = memo(() => {
  const [list, setList] = useState<DataType[]>(data)

  return (
    <div>
      <DataContext.Provider value={{ list, setList }}>
        <Search />
        <List />
      </DataContext.Provider>
    </div>
  )
})

export default App
