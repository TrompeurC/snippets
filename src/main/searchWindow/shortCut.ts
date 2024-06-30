import { BrowserWindow, app, dialog, globalShortcut } from "electron"


const search = (win: BrowserWindow) => {
  const visible = win.isVisible()
  visible ? win.hide() : win.show()
}

const config = {
  prevShortCut: ""
}

export const registerShortCut = (win: BrowserWindow, type: 'search', shortCut: string) => {
  const handle = type === 'search' ? search : () => { }
  config.prevShortCut && globalShortcut.unregister(config.prevShortCut)
  config.prevShortCut = shortCut;
  // globalShortcut.unregisterAll()
  const ok = globalShortcut.register(shortCut, () => handle(win))
  if (!ok) {
    dialog.showErrorBox('警告', `快捷键注册失败 register failed`)
  }
}

app.on('will-quit', () => {
  // 注销所有快捷键
  globalShortcut.unregisterAll()
})
