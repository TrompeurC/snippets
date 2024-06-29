export * from './window'
import { app } from 'electron'
import { registerIpc } from './ipc'
import { createWindow } from './window'
// export { registerShortCut } from './shortCut'


app.whenReady().then(() => {
  createWindow()
  registerIpc()
  // registerShortCut(win)
})


