import "./MyParks.css"
import { useState, useEffect } from 'react';
import axios from "axios"

export function MyParks () {

  const [ myParks, setMyParks] = useState ([]);

  const getMyParks = () => {
    axios
      .get('http://localhost:3000/parks_lists.json')
      .then((response) => {
        console.log(response.data); 
        setMyParks(response.data); 
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(getMyParks, []);

  return(
    <div className="test">
      {myParks.map((park) => (
        <div key={park.id}>
          <h1>{park.park_id}</h1>
        </div>
      ))}
    </div>
  )
}