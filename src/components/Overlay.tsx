import { ReactNode, useRef } from "react"
import useClickOutside from "../hooks/useClickOutside"
import { useGlobalContext } from "../contexts/GlobalContext"

interface OverlayProps {
    children: ReactNode,
    className?: string
}


export default function Overlay({children, className = ''}: OverlayProps) {
    const overlay = useRef<HTMLDivElement | null>(null)
    const {toggleSideBar, isSideBarOpen} = useGlobalContext()
    useClickOutside(overlay, toggleSideBar, true, isSideBarOpen)
    return <div ref={overlay}  className={`fixed top-0 h-screen w-screen bg-slate-400 bg-opacity-50 z-50 ${isSideBarOpen ? 'visible' : 'invisible'} sm:hidden flex justify-end ` + className}>
{children}
</div>     
}