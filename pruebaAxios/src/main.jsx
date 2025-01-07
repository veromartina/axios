/*
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App"
import {ChakraProvider} from '@chakra-ui/react' 
import { UserProvider } from './context/UserContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider>
      <UserProvider>
    <App />
    </UserProvider>
    </ChakraProvider>
   
  </StrictMode>,
)
*/

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { UserProvider } from "./context/userContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider>
      <UserProvider>
        {/* envolver con el provider los componentes que necesiten de esa info que retorno en el value */}
        <ThemeProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ThemeProvider>
      </UserProvider>
    </ChakraProvider>
  </StrictMode>
);