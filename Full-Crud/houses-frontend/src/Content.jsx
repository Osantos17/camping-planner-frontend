import axios from "axios"
import { useState, useEffect} from "react"
import { HousesIndex } from "./HousesIndex";

export function Content() {

  const [houses, setHouses] = useState([]);

  const handleIndexHouses = () => {
    console.log("handleIndexHouses");
    axios.get("http://localhost:3000/houses.json").then((response) => {
      console.log(response.data);
      setHouses(response.data);
    });
  };

  useEffect(handleIndexHouses, [])
  
  return (
    <div>
      <HousesIndex houses={houses}/>
    </div>
  )
}

