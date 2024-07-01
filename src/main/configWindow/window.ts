import { is } from "@electron-toolkit/utils"
import { BrowserWindow, shell } from "electron"
import path, { join } from "path"
import icon from '../../../resources/icon.png?asset'
import url from 'node:url'

export function createWindow(): BrowserWindow {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 600,
    height: 600,
    show: false,
    // frame: false,
    // resizable: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })
  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })


  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'] + '/#config')
  } else {
    // mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
    mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, '../renderer/index.html'),
      protocol: 'file:',
      slashes: true,
      hash: '#/config'
    }))
  }
  return mainWindow
}


