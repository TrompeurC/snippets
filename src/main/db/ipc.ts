import { IpcMainEvent, IpcMainInvokeEvent, ipcMain } from "electron";
import * as query from './query'


ipcMain.handle('sql', (_event: IpcMainInvokeEvent, sql: string, type: SqlActionType, params: Record<string, any> = {}) => {
  return query[type](sql, params)
})
