import { useRef } from "react"
import useClickOutside from "../../hooks/useClickOutside"
import { useGlobalContext } from "../../contexts/GlobalContext"
import { cn } from "../../utils-lib/cn"
import { ClassNameAndChildren } from "../../types/common"


export default function Overlay({children, className}: ClassNameAndChildren) {
    const overlay = useRef<HTMLDivElement | null>(null)
    const {toggleSideBar, isSideBarOpen} = useGlobalContext()
    useClickOutside(overlay, toggleSideBar, true, isSideBarOpen)
    return <div ref={overlay}  className={cn(`fixed top-0 h-screen w-screen z-50 ${isSideBarOpen ? 'visible' : 'invisible'} sm:hidden flex justify-end bg-slate-400/50`, className)}>
{children}
</div>     
}