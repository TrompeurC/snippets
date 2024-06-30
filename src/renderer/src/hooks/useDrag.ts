import { MutableRefObject, useEffect } from "react"

export const useDrag = <T extends HTMLElement | null>(elRef: MutableRefObject<T>) => {
  let isDragging = false;
  let offset = { x: 0, y: 0 };
  const mouseDown = (event: MouseEvent) => {
    isDragging = true;
    offset = {
      x: event.screenX - window.screenX,
      y: event.screenY - window.screenY,
    }
  }

  const mouseMove = (event: MouseEvent) => {
    if (!isDragging) return;
    const { screenX, screenY } = event; // 从最新的鼠标位置获取 x 和 y
    window.moveTo(screenX - offset.x, screenY - offset.y);
  }
  const mouseLeave = () => {
    isDragging = false;
    offset = { x: 0, y: 0 };
  }

  useEffect(() => {
    elRef.current?.addEventListener('mousedown', mouseDown)
    elRef.current?.addEventListener('mousemove', mouseMove)
    elRef.current?.addEventListener('mouseleave', mouseLeave)
    elRef.current?.addEventListener('mouseup', mouseLeave)

    return () => {
      elRef.current?.removeEventListener('mousedown', mouseDown)
      elRef.current?.removeEventListener('mousemove', mouseMove)
      elRef.current?.removeEventListener('mouseleave', mouseLeave)
      elRef.current?.removeEventListener('mouseup', mouseLeave)

    }
  }, [])
}
