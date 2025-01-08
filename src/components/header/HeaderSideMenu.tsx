import { faXmark as closeIcon, faSun as sunLightMode, faMoon as moonDarkMode, faDesktop as pcIcon } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function HeaderSideMenu() {

    return (
        <div className='z-50 fixed inset-0 bg-slate-400 bg-opacity-50  hidden flex justify-end'>
        <div className='relative h-full xs:w-[40%] w-[60%] backdrop-blur-sm bg-slate-200 p-12 xs:p-14'>
            <button className='absolute top-4 right-6 text-xl hover:opacity-55 active:scale-75 transition duration-500' ><FontAwesomeIcon icon={closeIcon}/></button>
            <div  className='flex flex-col items-start justify-center gap-3'>
            <h3 className='font-semibold hover:font-bold inline-block text-lg'>Theme</h3>
            <ul className='flex flex-col justify-center items-start w-full gap-1'>
            <li>
            <button className='flex justify-center items-center gap-2 hover:text-slate-600 hover:scale-95 transition duration-500'><FontAwesomeIcon className='w-4' icon={sunLightMode} />Light</button>
            </li>
            <li>
            <button className='flex justify-center items-center gap-2 hover:text-slate-600 hover:scale-95 transition duration-500'><FontAwesomeIcon className='w-4' icon={moonDarkMode} />Dark</button>
            </li>
            <li>
            <button className=' flex justify-center items-center gap-2 hover:text-slate-600 hover:scale-95 transition duration-500'><FontAwesomeIcon className='w-4' icon={pcIcon} />System</button>   
            </li>                     
        </ul>
            </div>
            <p className='absolute bottom-5 text-xs left-1/2 -translate-x-1/2 w-full text-center leading-5'>© 2024 by AlimConfiance. <br />  All right reserved.</p>
        </div>
    </div>
    )
}