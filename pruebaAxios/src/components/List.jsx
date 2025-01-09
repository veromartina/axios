import { Button, Card, CardBody, CardFooter, CardHeader, Heading, SimpleGrid, Image, Text} from "@chakra-ui/react"
import { courses } from "../utils/constanst"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"


export const List = () => {
  const {add}=useContext(CartContext) //CartContext,es el context que me trae  la informacion.de donde traigo la funcion add()

  return (
    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
     {courses.map((course)=>(
      <Card key={course.id}>
    <CardHeader>
      <Heading size='md'> {course.name}</Heading>
    </CardHeader>
    <CardBody>
      <Text>{course.description}</Text>
      <Image src={course.image} alt={course.name}/>
      <Text>${course.price}</Text>
    </CardBody>
    <CardFooter>
      <Button onClick={()=>add(course)}>Agregar al carrito</Button> {/*add: declarado arriba  */}
    </CardFooter>
  </Card>
   ))}
      </SimpleGrid>
      );
  };
export default List
