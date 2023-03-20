import React, { createContext, useState } from 'react'
import {
  saveToLocalStorage,
  loadFromLocalStorage,
} from '../../services/helpers/localStorage'

const initialTheme = loadFromLocalStorage('themeChessLand') || 'light'
const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialTheme)

  const handleTheme = () => {
    if (theme === 'dark') {
      saveToLocalStorage('themeChessLand', 'light')
      setTheme('light')
    } else {
      saveToLocalStorage('themeChessLand', 'dark')
      setTheme('dark')
    }
  }

  const data = {
    handleTheme,
    theme,
  }

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
}

export default ThemeContext
