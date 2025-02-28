import { useGlobalContext } from '../../contexts/GlobalContext'
import CopyrightNotice from '../ui/CopyrightNotice'
import Overlay from '../ui/Overlay'
import Button from '../ui/button/Button'
import ThemeOption from './ThemeOption'
import {
  SideBarListProps,
  SideBarContentProps,
  SideMenuProps,
  SideMenuBtn,
  SideMenuLi
} from './sideMenu.types'
import { faXmark as closeIcon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SideMenu({ liList, btnList }: SideMenuProps) {
  const { isSideBarOpen, toggleSideBar } = useGlobalContext()

  return (
    <Overlay>
      <SideBarContent
        liList={liList}
        btnList={btnList}
        toggleSideBar={toggleSideBar}
        isSideBarOpen={isSideBarOpen}
      />
    </Overlay>
  )
}

function SideBarContent({
  isSideBarOpen,
  toggleSideBar,
  liList,
  btnList
}: SideBarContentProps) {
  return (
    <div
      className={`relative h-full ${isSideBarOpen ? 'translate-x-0' : 'translate-x-full'} w-[270px] bg-primary p-12 transition-all duration-700 xs:w-[250px] xs:p-14`}>
      <Button
        onClick={toggleSideBar}
        variant='ghost'
        className='absolute right-6 top-4 px-4 text-xl duration-500 hover:opacity-55 active:scale-75'>
        <FontAwesomeIcon icon={closeIcon} />
      </Button>
      <div className='flex flex-col items-start justify-center gap-3'>
        <h3 className="relative inline-block text-lg font-semibold before:absolute before:top-full before:h-px before:w-0 before:bg-main before:transition-all before:duration-500 before:content-[''] hover:before:w-full">
          Theme
        </h3>
        <SideBarList liList={liList} btnList={btnList} />
      </div>
      <CopyrightNotice className='absolute bottom-5 left-1/2 w-full -translate-x-1/2' />
    </div>
  )
}

function SideBarList({ liList, btnList }: SideBarListProps) {
  return (
    <ul className='flex w-full flex-col items-start justify-center gap-1'>
      {renderThemeOptions(btnList, liList)}
    </ul>
  )
}

function renderThemeOptions(btnList: SideMenuBtn[], liList: SideMenuLi[]) {
  return btnList.map(({ onClick }, i) => {
    const li = liList[i]
    return (
      <Button variant='ghost' key={i} onClick={onClick}>
        <ThemeOption
          title={li.title}
          icon={li.icon}
          classNameCondition={li.classNameCondition}
        />
      </Button>
    )
  })
}
