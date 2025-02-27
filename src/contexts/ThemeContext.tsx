import { createContext, useContext, useState, useEffect, ReactElement } from "react";
import { Children } from "../types/common.d";

const ThemeContext = createContext<{isDarkMode: boolean, toggleTheme: () => void, checkSystemTheme: () => void, 
  lightMode: () => void, darkMode: () => void
} | null>(null);

const ThemeContextProvider = ({ children }: Children<ReactElement>) => {
  const [isDarkMode, setIsDarkMode] = useState((): boolean => (localStorage.theme === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches) && localStorage.theme !== 'light')

  useEffect(() => {
    if (isDarkMode) document.documentElement.classList.add('dark');
     else document.documentElement.classList.remove('dark');
    
      localStorage.theme = !isDarkMode ? 'light' : 'dark'
  }, [isDarkMode])


  const toggleTheme =  () => setIsDarkMode(prevState => !prevState)

  const lightMode = () => setIsDarkMode(false)
  const darkMode = () => setIsDarkMode(true)

  const checkSystemTheme = () => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) setIsDarkMode(true)
    else setIsDarkMode(false)
  }
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, checkSystemTheme, lightMode, darkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useThemeContext must be used within a ThemeContextProvider");
  return context;
}

export default ThemeContextProvider;