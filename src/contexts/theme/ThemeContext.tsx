import { Children } from '../../types/common'
import { ThemeContext } from './useThemeContext.hook'
import { useState, useEffect, ReactElement } from 'react'

const ThemeContextProvider = ({ children }: Children<ReactElement>) => {
  const [isDarkMode, setIsDarkMode] = useState(
    (): boolean =>
      (localStorage.theme === 'dark' ||
        window.matchMedia('(prefers-color-scheme: dark)').matches) &&
      localStorage.theme !== 'light'
  )

  useEffect(() => {
    if (isDarkMode) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')

    localStorage.theme = !isDarkMode ? 'light' : 'dark'
  }, [isDarkMode])

  const toggleTheme = () => setIsDarkMode(prevState => !prevState)

  const lightMode = () => setIsDarkMode(false)
  const darkMode = () => setIsDarkMode(true)

  const checkSystemTheme = () => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches)
      setIsDarkMode(true)
    else setIsDarkMode(false)
  }
  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        toggleTheme,
        checkSystemTheme,
        lightMode,
        darkMode
      }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
