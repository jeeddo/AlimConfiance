import { useGlobalContext } from '../../contexts/GlobalContext'
import useClickOutside from '../../hooks/useClickOutside'
import { ClassNameAndChildren } from '../../types/common'
import { cn } from '../../utils-lib/cn'
import { useRef } from 'react'

export default function Overlay({ children, className }: ClassNameAndChildren) {
  const overlay = useRef<HTMLDivElement | null>(null)
  const { toggleSideBar, isSideBarOpen } = useGlobalContext()
  useClickOutside(overlay, toggleSideBar, true, isSideBarOpen)
  return (
    <div
      ref={overlay}
      className={cn(
        `fixed top-0 z-50 h-screen w-screen ${isSideBarOpen ? 'visible' : 'invisible'} flex justify-end bg-slate-400/50 sm:hidden`,
        className
      )}>
      {children}
    </div>
  )
}
