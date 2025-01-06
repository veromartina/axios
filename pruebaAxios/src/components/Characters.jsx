import {Card, Image, Stack, CardBody, Heading, Text, CardFooter, Badge} from "@chakra-ui/react"

const Characters = ({name, status, gender, species, image}) => {

    return (
   
    <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={image}
    alt={image}
  />

  <Stack>
    <CardBody>
      <Heading size='md'>{name}</Heading>

      <Text py='2'>
        {status}
      </Text>
    </CardBody>

    <CardFooter>
      <Text>{gender}</Text>
      <Badge>{species}</Badge>
    </CardFooter>
  </Stack>
</Card>
   
    )
}
export default Characters