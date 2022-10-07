const { app, BrowserWindow } = require('electron')
const path = require('path')

let mainWindow = null

const createWindow = () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    const startUrl = 
        process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000'
            : path.join(__dirname, '/build/index.html')
    console.log('===================================')
    console.log(startUrl)
    mainWindow.loadURL(startUrl)

    mainWindow.webContents.openDevTools()

    mainWindow.on('closed', function () {
        mainWindow = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow()
    }
})
