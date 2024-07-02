import { memo } from 'react'

import * as utils from '@renderer/utils'
import { RouterProvider } from 'react-router-dom'
import router from './router'

const App = memo(() => {
  utils.shortCut('search', 'CommandOrControl+shift+;')
  // useDrag(elRef)
  return (
    <div>
      {/* <DataContext.Provider value={{ list, setList }}> */}
      {/* </DataContext.Provider> */}
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
})

export default App
