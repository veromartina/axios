import { useState, createContext  } from "react"

export const CartContext = createContext()

export const CartProvider = ({children}) =>{

    const[cart, setCart ]= useState([])

    return
    (
    <CartContext.Provider>{children}</CartContext.Provider>
)}
