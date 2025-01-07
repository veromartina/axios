import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext()


export const ThemeProvider = ({children}) => {
const [darkMode, setDarkMode] = useState(false)
const handleTheme = () =>  {
    setDarkMode((prev)=>!prev)
}

  return (
    <ThemeContext.Provider value={{darkMode, handleTheme}} >{children}</ThemeContext.Provider>
  )
}