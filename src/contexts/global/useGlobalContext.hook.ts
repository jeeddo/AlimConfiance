import type {
  SideMenuBtn,
  SideMenuLi
} from '../../components/side-menu/sideMenu.types'
import { createContext, useContext } from 'react'

export const GlobalContext = createContext<{
  isSideBarOpen: boolean
  toggleSideBar: () => void
  sideBarContent: { sideBarBtns: SideMenuBtn[]; sideBarLis: SideMenuLi[] }
  isMobile: boolean
} | null>(null)

export const useGlobalContext = () => {
  const globalContext = useContext(GlobalContext)
  if (!globalContext) throw new Error('Your are not in a GlobalContextProvider')
  return globalContext
}
