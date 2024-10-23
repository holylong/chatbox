export interface ElectronIPC {
    invoke: (channel: string, ...args: any[]) => Promise<any>
    onSystemThemeChange: (callback: () => void) => () => Electron.IpcRenderer
    onWindowShow: (callback: () => void) => () => Electron.IpcRenderer
    previewCode: (code: string, language: string) => void // 添加 previewCode 方法
}
