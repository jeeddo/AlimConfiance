import { faXmark as closeIcon, faSun as sunLightMode, faMoon as moonDarkMode, faDesktop as pcIcon } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useThemeContext } from "../../context/themeContext"

interface HeaderSideMenuProps {
    setShowSideBar: (bool: React.SetStateAction<boolean>) => void,
    isSideBarOpen: boolean
}

export default function HeaderSideMenu({isSideBarOpen, setShowSideBar}: HeaderSideMenuProps) {

    const {darkMode, lightMode, checkSystemTheme} = useThemeContext()
    return (
       <div className={`z-50 fixed inset-0 bg-slate-400 bg-opacity-50 ${isSideBarOpen ? 'scale-100' : 'scale-0'} transition duration-1000 origin-bottom-left sm:hidden flex justify-end`}>
        <div className={`relative h-full ${isSideBarOpen ? 'scale-100' : 'scale-0'} xs:w-[250px] w-[270px] origin-top-right transition-all delay-500 duration-700 bg-primary p-12 xs:p-14`}>
            <button onClick={() => setShowSideBar(false)} className='absolute top-4 right-6 text-xl hover:opacity-55 active:scale-75 transition duration-500' ><FontAwesomeIcon icon={closeIcon}/></button>
            <div  className='flex flex-col items-start justify-center gap-3'>
            <h3 className='font-semibold hover:font-bold inline-block text-lg'>Theme</h3>
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