import { BrowserWindow, app, dialog, globalShortcut } from "electron"


const search = (win: BrowserWindow) => {
  win.isVisible() ? win.hide() : win.show()
}

export const registerShortCut = (win: BrowserWindow, type: 'search', shortCut: string) => {
  const handle = type === 'search' ? search : () => { }
  globalShortcut.unregisterAll()
  const ok = globalShortcut.register(shortCut, () => handle(win))
  if (!ok) {
    dialog.showErrorBox('警告', `快捷键注册失败 register failed`)
  }
}

app.on('will-quit', () => {
  // 注销所有快捷键
  globalShortcut.unregisterAll()
})
