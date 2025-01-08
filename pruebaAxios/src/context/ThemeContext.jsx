import { useState, createContext  } from "react"

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) =>{

    const[theme, setTheme ]= useState([])

    return
(
    <ThemeContext.Provider>{children}</ThemeContext.Provider>
)
}