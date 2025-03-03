import { useEffect } from 'react'

export default function useClickOutside(
  ref: React.RefObject<HTMLElement | null>,
  action: () => void,
  overlay: boolean = false,
  enabled: boolean
) {
  useEffect(() => {
    if (!enabled) return
    const handleClickOutside = (e: MouseEvent) => {
      const clickedElement = e.target as Node
      if (overlay && ref.current === clickedElement) action()
      else if (!overlay && !ref.current?.contains(clickedElement)) action()
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [ref, action, overlay, enabled])
}
