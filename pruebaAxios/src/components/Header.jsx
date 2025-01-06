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

  
  
  return (
    <VStack>
      <Heading>Lista de Personajes </Heading>
      <InputGroup size="md">
        <Input
          pr="4.5rem"
          type={"text"}
          placeholder="ingrese un nombre"
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
        placeholder="Select option"
        onChange={(e) => {setGender(e.target.value)}}
        value={gender}>
        <option value="">all</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </Select>

      <Select
        placeholder="Select option"
        onChange={(e) => {setStatus(e.target.value)}}
        value={status}>
        <option value="">All</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </Select>
    </VStack>
  );
};
export default Header;
