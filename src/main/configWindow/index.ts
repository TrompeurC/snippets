export * from './window'
import { app } from 'electron'
import './ipc'
// import { createWindow } from './window'
// export { registerShortCut } from './shortCut'


app.whenReady().then(() => {
  // createWindow()
})


