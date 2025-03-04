import useIsMobile from '../../hooks/useIsMobile'
import useSideMenu from '../../components/side-menu/useSideMenu.hook'
import { Children } from '../../types/common'
import { GlobalContext } from './useGlobalContext.hook'
import { type ReactElement, useState } from 'react'

const GlobalContextProvider = ({ children }: Children<ReactElement>) => {
  const [isSideBarOpen, setShowSideBar] = useState(false)

  const {sideBarContent} = useSideMenu()

  const isMobile = useIsMobile()

  const toggleSideBar = () => {
    setShowSideBar(prevState => !prevState)
  }

  return (
    <GlobalContext.Provider
      value={{ isSideBarOpen, toggleSideBar, sideBarContent, isMobile }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider
