import {
  Heading,
  VStack,
  Input,
  InputRightElement,
  Button,
  InputGroup,
  Select,
} from "@chakra-ui/react";

const Header = ({ setName, setGender, setStatus, gender, status, inputValue, setInputValue }) => {
  
  const handleClick = () => {
    // Si el input tiene texto, buscar personajes con ese nombre
    setName(inputValue)
  };


  const handleInputChange = (e) => {
    // El valor del input solo se almacena en `inputValue` cuando el usuario escribe
    setInputValue(e.target.value);
  };

  // header con titulo y filtros
  return (
    <VStack>
      <Heading>Lista de Personajes </Heading>
      <InputGroup size="md">
        <Input
          pr="4.5rem"
          type={"text"}
          placeholder="ingrese nombre del personaje"
          onChange={handleInputChange}  // Actualizamos el valor del input temporalmente
          value={inputValue}  // Este estado es el que controla el input, pero solo cuando el usuario escribe
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
          Buscar
          </Button>
          
        </InputRightElement>
      </InputGroup>
      <Select
        placeholder="Elija genero"
        onChange={(e) => {setGender(e.target.value)}}
        value={gender}>
        <option value="">Todos</option>
        <option value="female">Mujer</option>
        <option value="male">Hombre</option>
        <option value="genderless">Sin genero</option>
        <option value="unknown">Desconocido</option>
      </Select>

      <Select
        placeholder="Elija Estado"
        onChange={(e) => {setStatus(e.target.value)}}
        value={status}>
        <option value="">Todos</option>
        <option value="alive">Vivo</option>
        <option value="dead">Muerto</option>
        <option value="unknown">Desconocido</option>
      </Select>
    </VStack>
  );
};
export default Header;
