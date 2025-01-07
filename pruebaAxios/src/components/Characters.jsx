import { Card, Image, Stack, CardBody, Heading, Text, CardFooter, Badge } from "@chakra-ui/react"; 

const Characters = ({ name, status, gender, species, image }) => {
  
  // Función para determinar el color según el status
  const getStatusColor = (status) => {
    if (status === 'Dead') {
      return 'red.500'; // rojo
    } else if (status === 'Alive') {
      return 'green.500'; // verde
    } else {
      return 'gray.500'; // blanco o gris para "unknown"
    }
  };

  return (
    <Card 
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
      width="100%" 
      height="auto"
      maxWidth="400px"  // Controla el tamaño máximo de la tarjeta
      margin="1rem"
      backgroundColor="rgb(157, 185, 185)"
    >
      <Image
        objectFit="cover"
        width={{ base: '100%', sm: '150px' }} // Ajusta el tamaño en móviles
        height={{ base: '200px', sm: '200px' }} // Fija la altura de la imagen
        src={image}
        alt={name}
      />

      <Stack
        p="4"
        spacing="3"
        justify="space-between"
        height="100%" // Asegura que el Stack llene la altura de la tarjeta
        align="stretch"
      >
        <CardBody
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          height="100%"
        >
          <Heading
            size="sm"
            isTruncated  //  evita que el nombre se desborde
            title={name} //  muestra el nombre completo al hacer hover
            height="50px"  // Fija la altura del encabezado
            overflow="hidden"
          >
            {name}
          </Heading>

          <Text py="2" bg={getStatusColor(status)} borderRadius="md" textAlign="center" width="100px">
            {status}
          </Text>
        </CardBody>

        <CardFooter
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          padding="1rem"
        >
          <Text fontSize="sm">{gender}</Text>
          <Badge fontSize="sm">{species}</Badge>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default Characters;




/*import { Card, Image, Stack, CardBody, Heading, Text, CardFooter, Badge } from "@chakra-ui/react";

const Characters = ({ name, status, gender, species, image }) => {
  
  // Función para determinar el color según el status
  const getStatusColor = (status) => {
    if (status === 'Dead') {
      return 'red.500'; // rojo
    } else if (status === 'Alive') {
      return 'green.500'; // verde
    } else {
      return 'gray.500'; // blanco o gris para "unknown"
    }
  };

  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: '100%', sm: '200px' }}
        src={image}
        alt={name}
      />

      <Stack>
        <CardBody>
          <Heading size="sm" width="100%" overflow="hidden"height="50px" >{name}</Heading>

          <Text py="2" bg={getStatusColor(status)}>
            {status}
          </Text>
        </CardBody>

        <CardFooter>
          <Text>{gender}</Text>
          <Badge>{species}</Badge>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default Characters;

*/