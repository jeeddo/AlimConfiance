import { faMoon as moonDarkMode, faStar as starDarkMode, faBars as menuIcon } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import LogoAlimConfiance from '../../assets/images/LogoAlimConfiance.svg'

export default function HeaderMain() {

    return(
        <div className='max-w-6xl mx-auto w-full flex xl:justify-between justify-around items-center'>
        <img className='min-w-[200px] max-w-[33%]' src={LogoAlimConfiance} alt="Logo AlimConfiance" />
        <div className="relative w-fit cursor-pointer sm:inline-block hidden text-blue-900">
            <FontAwesomeIcon className='md:text-3xl text-2xl' icon={moonDarkMode} />
            <FontAwesomeIcon className='w-3 absolute top-1/4 -translate-y-1/2 -right-3' icon={starDarkMode} />
            <FontAwesomeIcon className='w-2 absolute top-[67%] -translate-y-1/2 -right-4' icon={starDarkMode} />
        </div>
        <button className='sm:hidden inline-block text-xl'><FontAwesomeIcon icon={menuIcon} /></button>
    </div>
    )
}