import axios from "axios"
import { useState, useEffect} from "react"
import {useParams} from "react-router-dom"

export function HousessShow( ) {
  const [house, setHouse] = useState({})
  const params = useParams();
  
  const getHouseData = () => {
    console.log("getting house data..");
    console.log(params);
    axios.get(`http://localhost:3000/houses/${params.id}.json`).then(response => {
      console.log(response)
      setHouse(response.data)
    });
  };

  useEffect(getHouseData, [])
  
  return (
    <div>
      <p>hello my friends hello</p>
      <p>the house's id is: {house.id}</p>
      <p>the house's name is: {house.address}</p>
      <p>the house's prep_time is: {house.bedroooms}</p>
      <p>the house's directions is: {house.bathrooms}</p>
    </div>
  );
}