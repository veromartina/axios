import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Heading,
    Image,
    SimpleGrid,
    Text,
  } from "@chakra-ui/react";
  import { courses } from "../utils/constanst";
  import { useContext } from "react";
  import { CartContext } from "../context/CartContext";
  
  export const List = () => {
      const {add }=useContext(CartContext)
    return (
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        {courses.map((course) => (
          
          <Card key={course.id}>
              
            <CardHeader>
              <Heading size="md"> {course.name}</Heading>
            </CardHeader>
            <CardBody>
              <Text>{course.description}</Text>
              <Image src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60' alt={course.name}/>
              <Text >
                  ${course.price}
              </Text>
            </CardBody>
            <CardFooter>
              <Button onClick={()=>add(course)} >Añadir al carrito</Button>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    );
  };