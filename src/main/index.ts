import { app, shell, BrowserWindow } from 'electron'
import { join } from 'path'
import { is, optimizer } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png'

function createWindow(): void {
  const mainWindow = new BrowserWindow({
    height: 715,
    width: 1520,
    minHeight: 715,
    minWidth: 1520,
    frame: true,
    center: true,
    show: false,
    autoHideMenuBar: true,
    icon: icon,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      devTools: true,
      preload: join(__dirname, '../preload/index.js')
    }
  })

  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })


  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
