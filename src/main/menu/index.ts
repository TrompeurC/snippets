import { Menu, ipcMain, MenuItemConstructorOptions } from "electron";

import { del } from '../db/query'

ipcMain.handle('contextMenu', (_event, id: number) => {
  const menuArr: MenuItemConstructorOptions[] = [
    {
      label: '删除',
      click: async (_, win) => {
        await del(`delete from contents where id=${id}`)
        win?.webContents.send('refresh')
      }
    }
  ]

  const menu = Menu.buildFromTemplate(menuArr)
  menu.popup()
})
