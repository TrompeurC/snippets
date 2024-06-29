import { registerShortCut } from './shortCut';
import { BrowserWindow, IpcMainEvent, IpcMainInvokeEvent, ipcMain } from "electron";


export const registerIpc = () => {
  ipcMain.on('hiddenWindow', (event: IpcMainEvent) => {
    const win = BrowserWindow.fromWebContents(event.sender)!
    win.hide()
  })

  ipcMain.handle('shortCut', (event: IpcMainInvokeEvent, type: 'search', shortCut: string) => {
    const win = BrowserWindow.fromWebContents(event.sender)!
    return registerShortCut(win, type, shortCut)
  })
}




