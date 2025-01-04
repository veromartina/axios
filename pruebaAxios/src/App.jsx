import { VStack } from "@chakra-ui/react";
import List from "./components/List";
import Header from "./components/Header"
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [gender, setGender] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character?gender=${gender}&name=${name}&status=${status}`)
      .then(({ data }) => {
        setData(data.results);
      });
  }, [gender]);

  return (
    <VStack>
      <Header
       gender={gender}
       setGender={setGender}
       setName={setName}
       status={status}
       setStatus={setStatus}
       name={name}/>

      <List
        data={data}/>
    </VStack>
  );
}

export default App;
