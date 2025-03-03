import { createContext, useContext } from 'react'

export const ThemeContext = createContext<{
  isDarkMode: boolean
  toggleTheme: () => void
  checkSystemTheme: () => void
  lightMode: () => void
  darkMode: () => void
} | null>(null)

export const useThemeContext = () => {
  const context = useContext(ThemeContext)
  if (!context)
    throw new Error(
      'useThemeContext must be used within a ThemeContextProvider'
    )
  return context
}
