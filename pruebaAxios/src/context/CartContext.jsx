import { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const add = (product) => {
    setCart((prev) => [...prev, product]);
    console.log(cart)
  };

  const remove = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ add, remove, cart }}>
      {children}
    </CartContext.Provider>
  );
};