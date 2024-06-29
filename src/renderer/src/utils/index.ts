export const hiddenWindow = () => {
  window.api.hiddenWindow()
}


export const shortCut = async (type: 'search', shortCut: string) => {
  return await window.api.registerShortCut(type, shortCut)
}
