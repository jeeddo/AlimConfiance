import { faXmark as closeIcon, faSun as sunLightMode, faMoon as moonDarkMode, faDesktop as pcIcon } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useThemeContext } from "../../contexts/ThemeContext"
import clsx from "clsx"
import { useGlobalContext } from "../../contexts/GlobalContext"
import Overlay from "../Overlay"
import CopyrightNotice from "../CopyrightNotice"
import { SideMenuBtn, SideMenuLi, SideBarContentProps, SideBarListProps} from "./sideMenu.types.d"


export default function SideMenu() {
    const {darkMode, lightMode, checkSystemTheme, isDarkMode} = useThemeContext()
    const {isSideBarOpen, toggleSideBar} = useGlobalContext()
    const sideBarLis: SideMenuLi[] = [
        {
            title: 'Light',
            icon: sunLightMode,
            classNameCondition: !isDarkMode && 'font-semibold text-main'
        },
        {
            title: 'Dark',
            icon: moonDarkMode,
            classNameCondition: isDarkMode && 'font-semibold text-main'
        },
        {
            title: 'System',
            icon: pcIcon
        }
    ]
    
    const sideBarBtns: SideMenuBtn[] = [
        {
            onClick: lightMode
        },
        {
            onClick: darkMode
        },
        {
            onClick: checkSystemTheme
        }
    ]

    return (
        <Overlay>
        <SideBarContent liList={sideBarLis} btnList={sideBarBtns} toggleSideBar={toggleSideBar} isSideBarOpen={isSideBarOpen} />
        </Overlay>
)
}

function SideBarContent({isSideBarOpen, toggleSideBar, liList, btnList}: SideBarContentProps) {
    return  <div  className={`relative h-full ${isSideBarOpen ? 'translate-x-0' : 'translate-x-full'} xs:w-[250px] w-[270px] transition-all duration-700 bg-primary p-12 xs:p-14`}>
    <button onClick={toggleSideBar} className='absolute top-4 right-6 text-xl hover:opacity-55 active:scale-75 transition duration-500' ><FontAwesomeIcon icon={closeIcon}/></button>
    <div  className='flex flex-col items-start justify-center gap-3'>
    <h3 className="relative font-semibold inline-block text-lg before:content-[''] before:absolute before:h-px before:w-0 before:top-full before:bg-main hover:before:w-full before:transition-all before:duration-500 ">Theme</h3>
    <SideBarList liList={liList} btnList={btnList} />
    </div>
    <CopyrightNotice className="absolute bottom-5 left-1/2 -translate-x-1/2 w-full" />
</div>
}

function SideBarList({liList, btnList}: SideBarListProps) {    
    return   <ul className='flex flex-col justify-center items-start w-full gap-1'>
    {btnList.map(({onClick}, i) => {
        const li = liList[i]
        return <button key={i} onClick={onClick}><li className={clsx('flex justify-center items-center gap-2 hover:text-slate-600 hover:scale-95 transition duration-500', typeof li.classNameCondition === 'string' ? li.classNameCondition : '')}><FontAwesomeIcon className="w-4" icon={li.icon} /> {li.title}</li></button>
    })}                   
</ul>
}