import { IconDefinition } from "@fortawesome/free-solid-svg-icons"

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

export {SideBarContentProps, SideBarListProps, SideMenuBtn, SideMenuLi}