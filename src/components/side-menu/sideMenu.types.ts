import { type IconDefinition } from '@fortawesome/free-solid-svg-icons'

interface SideMenuLi {
  title: string
  icon: IconDefinition
  classNameCondition?: string | boolean
}

interface SideMenuBtn {
  onClick: () => void
}

interface SideBarListProps {
  btnList: SideMenuBtn[]
  liList: SideMenuLi[]
}

interface SideBarContentProps extends SideBarListProps {
  isSideBarOpen: boolean
  toggleSideBar: () => void
}

type SideMenuProps = SideBarListProps

type ThemeOptionProps = SideMenuLi

interface SideBarContent {
  sideBarLis: SideMenuLi[],
  sideBarBtns: SideMenuBtn[]
}

export type {
  SideBarContentProps,
  SideBarListProps,
  SideMenuBtn,
  SideMenuLi,
  SideMenuProps,
  ThemeOptionProps,
  SideBarContent
}
