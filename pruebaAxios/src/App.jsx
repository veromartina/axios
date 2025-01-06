import { VStack, ButtonGroup, Button } from "@chakra-ui/react";
import List from "./components/List";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {

  const [data, setData] = useState([]);
  const [gender, setGender] = useState("");
  const [name, setName] = useState(""); //Estado para almacenar el nombre cuando se hace la búsqueda
  const [status, setStatus] = useState("");
  const [inputValue, setInputValue] = useState(""); // Estado para almacenar el valor temporal del input
  const [page, setPage] = useState(1);

  /*
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character?&name=${name}&gender=${gender}&status=${status}`)
      .then(({ data }) => {
        setData(data.results);
      });
  }, [name, gender, status]);
*/

  // useEffect para manejar la llamada a la API con los filtros
  useEffect(() => {
    // Condición para traer todos los personajes si no hay filtros activos
    let url = "https://rickandmortyapi.com/api/character";

    // Solo agregamos filtros si existen valores en ellos
    if (name || gender || status || page) {
      url += `?name=${name}&gender=${gender}&status=${status}&page=${page}`;
    }

    // Realizamos la solicitud a la API
    axios
      .get(url)
      .then(({ data }) => {
        setData(data.results); // Actualizamos los datos con los personajes filtrados o todos
      })
      .catch((error) => {
        console.error("Error fetching characters:", error);
      });
  }, [name, gender, status, page]); // Dependencias para actualizar cuando cambien los filtros

  return (
    <VStack>
      <Header
        setGender={setGender}
        setName={setName}
        setStatus={setStatus}
        gender={gender}
        status={status}
        name={name}
        inputValue={inputValue}ñ9
        setInputValue={setInputValue}
      />

      <List data={data} />

      <ButtonGroup gap="4">
        <Button colorScheme="blue" onClick={() => setPage((prev)=>prev-1)}>-</Button>

        <Button colorScheme="blue" onClick={() => setPage((prev)=>prev+1)}>
          +
        </Button>
      </ButtonGroup>
    </VStack>
  );
}

export default App;
