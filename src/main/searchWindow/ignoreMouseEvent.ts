import { BrowserWindow, IgnoreMouseEventsOptions } from 'electron';


export const setIgnoreMouseEvent = (win: BrowserWindow, ingnore: boolean, options?: IgnoreMouseEventsOptions) => {
  win.setIgnoreMouseEvents(ingnore, options)
}
