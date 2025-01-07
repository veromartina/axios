/*import { useContext } from "react"
import { UserContext } from "../context/UserContext"


export const Welcome = () => {
    const {user} = useContext(UserContext) //el parametro es el hook (desde donde lo traigo)
  return (
    <div>
      Welcome {user}
      <div>
      <button bg="red" >{user}</button>
      </div>
    </div>
    
   
  )
}

export default Welcome
*/

import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { Button, VStack } from "@chakra-ui/react";
import { ThemeContext } from "../context/ThemeContext";

export const Welcome = () => {

    // hago un destructuring de lo que necesito y uso el useContext importado desde react pasándole por parámetro el context del que voy a extraer la información

  const { user, handleLogin } = useContext(UserContext);
  const {darkMode, handleTheme} = useContext(ThemeContext)
  console.log(user);

  return (
    <VStack bg={darkMode?"black":"white"} spacing={20} width="800px" minH="100vh" color="gray.500" justifyContent="center">
      <div>Welcome {user?.name} </div>
      <Button onClick={handleLogin}>Iniciar sesión</Button>
      <Button onClick={handleTheme}>{darkMode?"ligth":"dark"}</Button>

    </VStack>
  );
};