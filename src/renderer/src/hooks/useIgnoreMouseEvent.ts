import { MutableRefObject, useEffect } from "react";

export const useIgnoreMouseEvent = <T extends HTMLElement | null>(elRef: MutableRefObject<T>) => {
  const moveEnter = () => {
    window.api.setIgnoreMouseEvent(false)
  }
  const moveLeave = (event: MouseEvent) => {
    if (event.target === document.body) {
      window.api.setIgnoreMouseEvent(true, { forward: true })
    }
  }
  window.api.setIgnoreMouseEvent(false)
  useEffect(() => {
    elRef.current?.addEventListener('mouseenter', moveEnter)
    elRef.current?.addEventListener('click', moveEnter)
    document.body?.addEventListener('mouseover', moveLeave)
    return () => {
      elRef.current?.removeEventListener('mouseenter', moveEnter)
      elRef.current?.removeEventListener('click', moveEnter)
      document.body?.removeEventListener('mouseover', moveLeave)
    }
  }, [])
}
