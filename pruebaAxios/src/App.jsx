/*
import './App.css'
import Welcome from "./components/Welcome";

function App() {

  return (
    <Welcome/>
    

  );
}

export default App;

*/


import { List } from  './components/List'
import {Welcome} from "./components/Welcome";


function App() {

  return (
  <>
   <Welcome /> 
    <List />
  </>
  )
}

export default App