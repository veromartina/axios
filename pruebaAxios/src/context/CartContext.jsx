import { useState, createContext  } from "react"

export const CartContext = createContext()

//CartProvider, es el proveedor de nuestra informacion
export const CartProvider = ({children}) =>{
//cart:carrito donde ponemos y sacamos cosas
    const[cart, setCart ] = useState([]) //estado del carrito

    //funcion para agregar al carrito, le paso product(todo)por si necesito toda la info
    const add = (product) => {
        setCart((prev)=>[...prev, product])
        console.log(cart)
    } 

    //funcion para eliminar del carrito. solo paso el id para eliminarlo completamente
    const remove = (id) =>{
        setCart((prev)=>prev.filter((item)=>item.id !==id))
    }
    return ( 
        <CartContext.Provider value={{add, remove, cart}}>{children}
    </CartContext.Provider>
    );    {/*se lo paso en el value para poder acceder desde cualquier componente q tengamos */}
    
   
};


