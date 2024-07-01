import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      hiddenWindow: () => void
      registerShortCut: (type: 'search', shortCut: string) => Promise<boolean>
      setIgnoreMouseEvent: (ignore: boolean, options?: IgnoreMouseEventsOptions) => void
      openConfigWindow: () => void
      sql<T>(sql: string, type: SqlActionType): Promise<T>
    }
  }
}
