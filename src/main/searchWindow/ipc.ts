import { setIgnoreMouseEvent } from './ignoreMouseEvent';
import { registerShortCut } from './shortCut';
import { BrowserWindow, IgnoreMouseEventsOptions, IpcMainEvent, IpcMainInvokeEvent, ipcMain } from "electron";


export const registerIpc = (win: BrowserWindow) => {
  ipcMain.on('hiddenWindow', (_event: IpcMainEvent) => {
    // const win = BrowserWindow.fromWebContents(event.sender)!
    win.hide()
  })

  ipcMain.handle('shortCut', (_event: IpcMainInvokeEvent, type: 'search', shortCut: string) => {
    // const win = BrowserWindow.fromWebContents(event.sender)!
    return registerShortCut(win, type, shortCut)
  })


  ipcMain.on('setIgnoreMouseEvent', (_event: IpcMainEvent, ignore: boolean, options: IgnoreMouseEventsOptions) => {
    // const win = BrowserWindow.fromWebContents(event.sender)!
    setIgnoreMouseEvent(win, ignore, options)
  })

  ipcMain.on('setPosition', (_event: IpcMainEvent, x: number, y: number) => {
    // const win = BrowserWindow.fromWebContents(event.sender)!
    win.setPosition(x, y)
  })
}




