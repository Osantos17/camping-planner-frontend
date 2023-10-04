import axios from "axios"
import { useState, useEffect} from "react"
import { HousesIndex } from "./HousesIndex";
import { HousesNew } from "./HousesNew";
import {Route, Routes} from "react-router-dom"
import { HousessShow } from "./HousesShow";

export function Content() {
  const [houses, setHouses] = useState([]);


  const handleIndexHouses = () => {
    console.log("handleIndexHouses");
    axios.get("http://localhost:3000/houses.json").then((response) => {
      console.log(response.data);
      setHouses(response.data);
    });
  };

  const handleCreateHouses = (params, successCallback) => {
    console.log("handleCreateHouses", params);
    axios.post("http://localhost:3000/houses.json", params).then((response) => {
      console.log(...houses, response.data);
      successCallback();
    });
  };

  useEffect(handleIndexHouses, [])
  
  return (
    <div>
      <Routes>
        <Route path ="/houses/new" element ={<HousesNew onCreateHouse={handleCreateHouses} /> }/>
        <Route path ="/houses" element ={<HousesIndex houses={houses}/>} />
        <Route path ="/houses/:id" element={ <HousessShow /> } />
      </Routes>

    </div>
  )
}

