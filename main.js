const { app, BrowserWindow } = require('electron')

function createWindow() {
    const window = new BrowserWindow({
        width: 1124,
        height: 668,
        frame: false,
        resizable: false,
        titleBarStyle: 'hidden',
        webPreferences: {
            nodeIntegration: true
        }
    })
    // Load HTML page 
    window.loadFile(__dirname + '/main/index.html')
    // Developper tool
    // window.webContents.openDevTools()
}

// When the app is ready, then show the window
app.whenReady().then(createWindow)

// When the window has closed it quit the app 
app.on('window-all-closed', () => {
    if (process.platform != 'darwin') {
        app.quit()
    }
})

// When app is active
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})