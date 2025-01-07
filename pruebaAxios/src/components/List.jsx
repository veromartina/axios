import {VStack} from "@chakra-ui/react"
import Characters from "./Characters"

const List = ({data}) => {

    return (
        <VStack  >
        {data.map((p) => (
            <Characters 
            key={p.id}
            name={p.name}
            status={p.status}
            gender={p.gender}
            species={p.species}
            image={p.image}
            />
        ))}    
        </VStack>
    )
}
export default List