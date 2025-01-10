
import { useState, createContext } from "react";

// Crea el contexto para el carrito
export const CartContext = createContext();

// CartProvider es el proveedor que envuelve a los componentes hijos
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // Estado para almacenar los productos del carrito

  // Función para agregar un producto al carrito, sin permitir duplicados
  const add = (product) => {
    setCart((prev) => {
      // Verificamos si el producto ya existe en el carrito (comparamos por id)
      const productExists = prev.some((item) => item.id === product.id);

      if (productExists) {
        // Si el producto ya está en el carrito, no lo agregamos de nuevo
        return prev;
      } else {
        // Si el producto no existe, lo agregamos al carrito
        return [...prev, product];
      }
    });
  };

  // Función para eliminar un producto del carrito por su id
  const remove = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id)); // Filtra los productos y elimina el que coincide con el id
  };

  // Proporcionamos el contexto con las funciones y el estado del carrito
  return (
    <CartContext.Provider value={{ add, remove, cart }}>
      {children}
    </CartContext.Provider>
  );
};