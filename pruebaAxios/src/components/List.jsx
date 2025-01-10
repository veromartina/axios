import { Button, Card, CardBody, CardFooter, CardHeader, Heading, SimpleGrid, Image, Text} from "@chakra-ui/react"
import { products } from "../utils/constanst"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"


export const List = () => {
  const {add}=useContext(CartContext) //CartContext,es el context que me trae  la informacion.de donde traigo la funcion add()

  return (
    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
     {products.map((product)=>(
      <Card key={product.id}>
    <CardHeader>
      <Heading size='md'> {product.name}</Heading>
    </CardHeader>
    <CardBody>
      <Text>{product.description}</Text>
      <Image src={product.image} alt={product.name}/>
      <Text>${product.price}</Text>
    </CardBody>
    <CardFooter>
      <Button onClick={()=>add(product)}>Agregar al carrito</Button>
       {/*add: declarado arriba  */}
    </CardFooter>
  </Card>
   ))}
      </SimpleGrid>
      );
  };
export default List
