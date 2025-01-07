import { VStack, ButtonGroup, Button, Spinner, Text, Alert, AlertIcon } from "@chakra-ui/react";
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
  const [loading, setLoading] = useState(false); // Estado de carga
  const [totalPages, setTotalPages] = useState(1); // Estado para el número total de páginas
  const [error, setError] = useState(""); // Estado para manejar los errores

  // useEffect para manejar la llamada a la API con los filtros
  useEffect(() => {
    let url = "https://rickandmortyapi.com/api/character";

    // Solo agregamos filtros si existen valores en ellos
    if (name || gender || status || page) {
      url += `?name=${name}&gender=${gender}&status=${status}&page=${page}`;
    }

    setLoading(true);
    setError(""); // Resetear el error antes de realizar una nueva solicitud

    // Realizamos la solicitud a la API
    axios
      .get(url)
      .then(({ data }) => {
        if (data.results.length === 0) {
          setError("No se encontraron personajes con ese nombre.");
        } else {
          setData(data.results); // Actualizamos los datos con los personajes filtrados o todos
          setTotalPages(data.info.pages); // Actualizamos el total de páginas
        }
        setLoading(false); // Terminamos la carga
      })
      .catch((error) => {
        setLoading(false); // Terminamos la carga incluso si hay error
        setError("Hubo un error al buscar los personajes.");
        console.error("Error fetching characters:", error);
      });
  }, [name, gender, status, page]); // Dependencias para actualizar cuando cambien los filtros

  return (
    <VStack spacing={4}>
    {/* Mostrar alerta si hay un error, se coloca primero para que se muestre arriba */}
    {error && (
      <Alert status="error" borderRadius="md" width="100%">
        <AlertIcon />
        {error}
      </Alert>
    )}
      <Header
        setGender={setGender}
        setName={setName}
        setStatus={setStatus}
        gender={gender}
        status={status}
        name={name}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />

      {loading ? (  // Si estamos cargando, mostrar el Spinner
        <Spinner size="xl" />
      ) : (
        <List data={data} />
      )}

      <ButtonGroup gap="4">
        {/* Botón para ir a la primera página */}
        <Button 
          colorScheme="blue" 
          onClick={() => setPage(1)} 
          isDisabled={page === 1} // Desactivar cuando estamos en la primera página
        >
          Primera
        </Button>

        <Button 
          colorScheme="blue" 
          onClick={() => setPage((prev) => prev - 1)} 
          isDisabled={page === 1} // Desactivar cuando estamos en la primera página
        >
          &lt;
        </Button>

        {/* Mostrar el número de la página actual */}
        <Text fontSize="lg" alignSelf="center">
          Página {page} de {totalPages}
        </Text>

        <Button 
          colorScheme="blue" 
          onClick={() => setPage((prev) => prev + 1)} 
          isDisabled={page === totalPages} // Desactivar cuando estamos en la última página
        >
          &gt;
        </Button>

        {/* Botón para ir a la última página */}
        <Button 
          colorScheme="blue" 
          onClick={() => setPage(totalPages)} 
          isDisabled={page === totalPages} // Desactivar cuando estamos en la última página
        >
          Última
        </Button>
      </ButtonGroup>
    </VStack>
  );
}

export default App;



/*
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

