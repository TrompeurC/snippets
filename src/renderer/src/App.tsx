import { memo, useRef } from 'react'
import Search from './components/Search'
import List from './components/List'
import * as utils from '@renderer/utils'
import { useIgnoreMouseEvent } from './hooks/useIgnoreMouseEvent'
import { useDrag } from './hooks/useDrag'

const App = memo(() => {
  utils.shortCut('search', 'CommandOrControl+shift+;')
  const elRef = useRef<HTMLDivElement>(null)
  useIgnoreMouseEvent(elRef)
  // useDrag(elRef)
  return (
    <div ref={elRef} className='box-border not-drag'>
      {/* <DataContext.Provider value={{ list, setList }}> */}
      <Search />
      <List />
      {/* </DataContext.Provider> */}
    </div>
  )
})

export default App
