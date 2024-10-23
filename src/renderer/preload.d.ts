import { ElectronIPC } from '../shared/electron-types'

declare global {
    // eslint-disable-next-line no-unused-vars
    interface Window {
        electronAPI?: ElectronIPC
    }
}

export {}


// src/types/global.d.ts
export interface ElectronAPI {
    previewCode: (code: string, language: string) => void;
}
