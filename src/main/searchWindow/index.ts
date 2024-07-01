export * from './window'
import { app } from 'electron'
import { registerIpc } from './ipc'
import { createWindow } from './window'
// export { registerShortCut } from './shortCut'


app.whenReady().then(() => {
  const win = createWindow()
  registerIpc(win)
  // registerShortCut(win)

  win.on('show', () => {
    win.setIgnoreMouseEvents(false)
  })
})


