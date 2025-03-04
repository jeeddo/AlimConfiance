import { useThemeContext } from '../../contexts/theme/useThemeContext.hook'
import {
  faSun as sunLightMode,
  faMoon as moonDarkMode,
  faDesktop as pcIcon
} from '@fortawesome/free-solid-svg-icons'
import type { SideBarContent } from './sideMenu.types'

export default function useSideMenu() {
  const { darkMode, lightMode, checkSystemTheme, isDarkMode } =
    useThemeContext()

  const sideBarContent: SideBarContent = {
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

  return {
    sideBarContent
  }
}
