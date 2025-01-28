import { faXmark as closeIcon, faSun as sunLightMode, faMoon as moonDarkMode, faDesktop as pcIcon, faL } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useThemeContext } from "../../context/ThemeContext"
import useClickOutside from "../../hooks/useClickOutside"
import { useRef } from "react"

interface HeaderSideMenuProps {
    setShowSideBar: (bool: React.SetStateAction<boolean>) => void,
    isSideBarOpen: boolean
}

export default function HeaderSideMenu({isSideBarOpen, setShowSideBar}: HeaderSideMenuProps) {
    const overlay = useRef<HTMLDivElement | null>(null)
    const {darkMode, lightMode, checkSystemTheme} = useThemeContext()

    useClickOutside(overlay, () => setShowSideBar(false), true)

    return (
       <div ref={overlay} className={`z-50 fixed inset-0 bg-slate-400 bg-opacity-50 ${isSideBarOpen ? 'visible' : 'invisible'} sm:hidden flex justify-end`}>
        <div  className={`relative h-full ${isSideBarOpen ? 'translate-x-0' : 'translate-x-full'} xs:w-[250px] w-[270px] transition-all duration-700 bg-primary p-12 xs:p-14`}>
            <button onClick={() => setShowSideBar(false)} className='absolute top-4 right-6 text-xl hover:opacity-55 active:scale-75 transition duration-500' ><FontAwesomeIcon icon={closeIcon}/></button>
            <div  className='flex flex-col items-start justify-center gap-3'>
            <h3 className="relative font-semibold inline-block text-lg before:content-[''] before:absolute before:h-px before:w-0 before:top-full before:bg-main hover:before:w-full before:transition-all before:duration-500 ">Theme</h3>
            <ul className='flex flex-col justify-center items-start w-full gap-1'>
            <li>
            <button onClick={lightMode} className='flex justify-center items-center gap-2 hover:text-slate-600 hover:scale-95 transition duration-500'><FontAwesomeIcon className='w-4' icon={sunLightMode} />Light</button>
            </li>
            <li>
            <button onClick={darkMode} className='flex justify-center items-center gap-2 hover:text-slate-600 hover:scale-95 transition duration-500'><FontAwesomeIcon className='w-4' icon={moonDarkMode} />Dark</button>
            </li>
            <li>
            <button onClick={checkSystemTheme} className=' flex justify-center items-center gap-2 hover:text-slate-600 hover:scale-95 transition duration-500'><FontAwesomeIcon className='w-4' icon={pcIcon} />System</button>   
            </li>                     
        </ul>
            </div>
            <p className='absolute bottom-5 text-xs left-1/2 -translate-x-1/2 w-full text-center leading-5'>© 2024 by AlimConfiance. <br />  All right reserved.</p>
        </div>
    </div>
)
}