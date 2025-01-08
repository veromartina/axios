import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx"
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider>
      
        <ThemeProvider>
          <CartProvider>
            <App/>
          </CartProvider>
        </ThemeProvider>
      
    </ChakraProvider>
  </StrictMode>
);