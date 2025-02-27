import { faXmark as closeIcon } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useGlobalContext } from "../../contexts/GlobalContext"
import Overlay from "../ui/Overlay"
import CopyrightNotice from "../ui/CopyrightNotice"
import { SideBarListProps, SideBarContentProps, SideMenuProps, SideMenuBtn, SideMenuLi} from "./sideMenu.types.d"
import Button from "../ui/button/Button"
import ThemeOption from "./ThemeOption"


export default function SideMenu({liList, btnList}: SideMenuProps) {
    const {isSideBarOpen, toggleSideBar} = useGlobalContext()

    return (
        <Overlay>
        <SideBarContent liList={liList} btnList={btnList} toggleSideBar={toggleSideBar} isSideBarOpen={isSideBarOpen} />
        </Overlay>
)
}

 function SideBarContent({isSideBarOpen, toggleSideBar, liList, btnList}: SideBarContentProps) {
    

    return   <div  className={`relative h-full ${isSideBarOpen ? 'translate-x-0' : 'translate-x-full'} xs:w-[250px] w-[270px] transition-all duration-700 bg-primary p-12 xs:p-14`}>
    <Button onClick={toggleSideBar} variant='ghost'  className="absolute px-4 top-4 right-6 text-xl hover:opacity-55 active:scale-75 duration-500"><FontAwesomeIcon icon={closeIcon}/></Button>
    <div  className='flex flex-col items-start justify-center gap-3'>
    <h3 className="relative font-semibold inline-block text-lg before:content-[''] before:absolute before:h-px before:w-0 before:top-full before:bg-main hover:before:w-full before:transition-all before:duration-500 ">Theme</h3>
    <SideBarList liList={liList} btnList={btnList} />
    </div>
    <CopyrightNotice className="absolute bottom-5 left-1/2 -translate-x-1/2 w-full" />
</div>
            
    } 

function SideBarList({liList, btnList}: SideBarListProps) {    
    return   <ul className='flex flex-col justify-center items-start w-full gap-1'>
            {renderThemeOptions(btnList, liList)}
</ul>
}

function renderThemeOptions(btnList: SideMenuBtn[], liList: SideMenuLi[]) {
    return btnList.map(({onClick}, i) => {
        const li = liList[i]
        return <Button variant='ghost' key={i} onClick={onClick}><ThemeOption title={li.title} icon={li.icon} classNameCondition={li.classNameCondition} /></Button>
    })
}