import {type IconDefinition } from "@fortawesome/free-solid-svg-icons"

interface SideMenuLi {
    title: string,
    icon: IconDefinition,
    classNameCondition?: string | boolean
}

interface SideMenuBtn {
    onClick: () => void
}

interface SideBarListProps {
    btnList: SideMenuBtn[],
    liList: SideMenuLi[]
}

interface SideBarContentProps extends SideBarListProps {
    isSideBarOpen: boolean,
    toggleSideBar: () => void,
}

interface SideMenuProps extends SideBarListProps {}
interface ThemeOptionProps extends SideMenuLi {}
export type {SideBarContentProps, SideBarListProps, SideMenuBtn, SideMenuLi, SideMenuProps, ThemeOptionProps}