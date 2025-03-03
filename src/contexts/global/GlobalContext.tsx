import useIsMobile from '../../hooks/useIsMobile'
import { Children } from '../../types/common'
import { useThemeContext } from '../theme/useThemeContext.hook'
import { GlobalContext } from './useGlobalContext.hook'
import {
  faSun as sunLightMode,
  faMoon as moonDarkMode,
  faDesktop as pcIcon
} from '@fortawesome/free-solid-svg-icons'
import { type ReactElement, useState } from 'react'

const GlobalContextProvider = ({ children }: Children<ReactElement>) => {
  const [isSideBarOpen, setShowSideBar] = useState(false)
  const { darkMode, lightMode, checkSystemTheme, isDarkMode } =
    useThemeContext()
  const isMobile = useIsMobile()

  const sideBarContent = {
    sideBarLis: [
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
    ],

    sideBarBtns: [
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
  }

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
