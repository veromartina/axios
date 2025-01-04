import {
  Heading,
  VStack,
  Input,
  InputRightElement,
  Button,
  InputGroup,
  Select,
} from "@chakra-ui/react";

const Header = (name, setName, setGender, setStatus, Gender, status) => {
  const handleClick = () => setName(name);

  return (
    <VStack>
      <Heading>Lista de Personajes </Heading>
      <InputGroup size="md">
        <Input
          pr="4.5rem"
          type={"text"}
          placeholder="ingrese algo"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            OK
          </Button>
        </InputRightElement>
      </InputGroup>
      <Select
        placeholder="Select option"
        onChange={(e) => {setGender(e.target.value); }}
        value={Gender}
      >
        <option value="">all</option>
        <option value="Female">Female</option>
        <option value="Male">Male</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </Select>

      <Select
        placeholder="Select option"
        onChange={(e) => {setStatus(e.target.value) }}
        value={status}
      >
        <option value="">All</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="Unknown">Unknown</option>
      </Select>
    </VStack>
  );
};
export default Header;
