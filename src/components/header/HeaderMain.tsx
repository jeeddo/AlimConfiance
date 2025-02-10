import { faMoon as moonDarkMode, faStar as starDarkMode, faBars as menuIcon} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import LogoAlimConfiance from '../../assets/images/LogoAlimConfiance.svg'
import Sun from '../../assets/images/Sun.png'
import { useThemeContext } from "../../context/ThemeContext"
import { useGlobalContext } from "../../context/GlobalContext"
import clsx from "clsx"


export default function HeaderMain() {
    const {toggleTheme, isDarkMode} = useThemeContext()
    const {toggleSideBar} = useGlobalContext()
    return(
        <div className='max-w-6xl mx-auto w-full flex xl:justify-between justify-around items-center'>
        <img className='min-w-[200px] max-w-[33%]' src={LogoAlimConfiance} alt="Logo AlimConfiance" />
        <div onClick={toggleTheme} className={clsx("relative w-fit cursor-pointer hidden text-main", isDarkMode && 'sm:hidden', !isDarkMode && 'sm:inline-block')}>
            <FontAwesomeIcon className='md:text-3xl text-2xl' icon={moonDarkMode} />
            <FontAwesomeIcon className='w-3 absolute top-1/4 -translate-y-1/2 -right-3' icon={starDarkMode} />
            <FontAwesomeIcon className='w-2 absolute top-[67%] -translate-y-1/2 -right-4' icon={starDarkMode} />
        </div>
        <img onClick={toggleTheme} className={clsx("cursor-pointer hidden w-7 md:w-9", isDarkMode && 'sm:inline-block', !isDarkMode && 'sm:hidden')} src={Sun} alt="Sun light mode" /> 
        <button onClick={toggleSideBar} className='sm:hidden inline-block text-xl'><FontAwesomeIcon icon={menuIcon} /></button>
    </div>
    )
}