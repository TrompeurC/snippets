import { memo, useRef } from 'react'

import * as utils from '@renderer/utils'
import { useIgnoreMouseEvent } from './hooks/useIgnoreMouseEvent'
import { RouterProvider } from 'react-router-dom'
import router from './router'

const App = memo(() => {
  utils.shortCut('search', 'CommandOrControl+shift+;')
  const elRef = useRef<HTMLDivElement>(null)
  useIgnoreMouseEvent(elRef)
  // useDrag(elRef)
  return (
    <div ref={elRef} className='box-border not-drag'>
      {/* <DataContext.Provider value={{ list, setList }}> */}
      {/* </DataContext.Provider> */}
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
})

export default App
