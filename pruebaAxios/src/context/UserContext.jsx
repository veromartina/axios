/*
import { createContext } from "react";

export const UserContext = createContext(); //declaro y creo el userContext

export const UserProvider = ({children}) => { //declaro el provider

    return <UserContext.Provider value={{user:"Naty"}}>{children}</UserContext.Provider>;
};
   */
  
import { useState, createContext } from "react";
// creo carpeta en src context y el archivo UserContext.jsx
// creo el userContext con createContext importado desde react

export const UserContext = createContext();

//creo mi componente Userprovider antes del return la lógica
// despues retornamos <UserContext.Provider value={{ toda la info que yo necesite en otros componentes }}>{children}</UserContext.Provider> 

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    setUser({
      name: "Naty",
      email: "naty@test.com",
    });
  };

  return (
    <UserContext.Provider value={{ user, handleLogin }}>{children}</UserContext.Provider>
  );
};