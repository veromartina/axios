import { Button, Card, CardBody, CardFooter, CardHeader, Heading, SimpleGrid, Stack } from "@chakra-ui/react"


const List = () => {


  return (
    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
      {courses.map((course)=>
      <Stack key={course.id}>
        <Card>
    <CardHeader>
      <Heading size='md'> Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
  
      </Stack>)}
      </SimpleGrid>

      )
      }
  

export default List
