import { useEffect } from "react"
import axios from "axios"

export const Axios = () => {
  //  const [data,setData] = useState([])

  
    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon')  //con axios la data ya viene parsiada en formato json.
        .then(({data})=>{    //poniendo entre llaves solo me trae data y no todo el resto de la api(desectructuro)
            console.log(data.results) //achico la info y traigo solo lo datos de los personajes(name y url).
        })
    },[])
  return (
    <div>
    Axion Ejemplo Api Pokemon
    </div>
  )
}

export default Axios
