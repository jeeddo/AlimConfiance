import { SideMenuBtn, SideMenuLi } from '../components/side-menu/sideMenu.types'
import { Children } from '../types/common'
import { MAX_MOBILE_DEVICES_WIDTH } from '../utils-lib/constants'
import { useThemeContext } from './ThemeContext'
import {
  faSun as sunLightMode,
  faMoon as moonDarkMode,
  faDesktop as pcIcon
} from '@fortawesome/free-solid-svg-icons'
import {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState
} from 'react'

const GlobalContext = createContext<{
  isSideBarOpen: boolean
  toggleSideBar: () => void
  sideBarContent: { sideBarBtns: SideMenuBtn[]; sideBarLis: SideMenuLi[] }
  isMobile: boolean
} | null>(null)

const GlobalContextProvider = ({ children }: Children<ReactElement>) => {
  const [isSideBarOpen, setShowSideBar] = useState(false)
  const { darkMode, lightMode, checkSystemTheme, isDarkMode } =
    useThemeContext()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= MAX_MOBILE_DEVICES_WIDTH) setIsMobile(true)
      else setIsMobile(false)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
  })

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

export const useGlobalContext = () => {
  const globalContext = useContext(GlobalContext)
  if (!globalContext) throw new Error('Your are not in a GlobalContextProvider')
  return globalContext
}
export default GlobalContextProvider
