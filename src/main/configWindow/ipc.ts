import { BrowserWindow, ipcMain } from "electron";
import { createWindow } from "./window";

let win: BrowserWindow | null = null

ipcMain.on('openConfigWindow', () => {
  if (win) return
  win = createWindow()
})
