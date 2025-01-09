import List from "./components/List"
import { CartProvider } from "./context/CartContext"

function App() {

  return (
    <CartProvider>  {/*envuelvo list para traer la funcion para agregar al carrito */}
   <List/>
   </CartProvider>
  )
}

export default App