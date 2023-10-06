import "./MyParks.css"
import { useState, useEffect } from 'react';
import axios from "axios"

export function MyParks () {

  const [ myParks, setMyParks] = useState ([]);
  const [ destoryParks, setDestroyParks ] = useState ([]);

  const getMyParks = () => {
    axios.get('http://localhost:3000/parks_lists.json').then((response) => {
        console.log(response.data); 
        setMyParks(response.data); 
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const destroyPark = (id) => {
    axios.delete(`http://localhost:3000/parks_lists/${id}.json`).then(response => {
      console.log(response.data);
      setDestroyParks([...destoryParks, response.data])

    })
  }

  useEffect(getMyParks, []);

  return(
    <div className="myparks-page">
      <div className="myparks">
        <h1 className="nationalp">MY NATIONAL PARKS</h1>
        <div className="summary">
        {myParks.map((park) => (
          <div className="parksummary" key={park.id}>
            <div>
              <span>
                <h2 className="park-name">{park.name.toUpperCase()}</h2>
                {park.city !== "f" ? (
                  <h2 className="city-name">{park.city.toUpperCase()}</h2>
                  ) :null }
              </span>
              <div className="parkinfo-background">
                <div className="row">
                  <div className="col">
                    <div className='campsites'>
                      <span><h6>Total Campsites</h6>{park.totalsites}</span>
                      <span><h6>First Come First Serve</h6>{park.firstcome}</span>
                      <span><h6>Reservable</h6>{park.reservable}</span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="ratinginfo">
                      <h5>Site Info</h5>
                      <div>
                        <p>Entry Fee - {park.fees}</p>
                      </div>
                      <p>Showers - {park.showers}</p>
                      <p>Toilets - {park.toilets}</p>
                      <p>Phone Reception - {park.phone}</p>
                      <a href={park.url}>{park.url}</a>
                    </div>
                  </div>
                  <div className="col">
                    <div className="parkinfo">
                      <span><h5>Description</h5>{park.description}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="button2" type="button" onClick={() => destroyPark(park.id)}>REMOVE</button>
          </div>
        ))}
        </div>
      </div>
      <p className="bottom">ADD MORE FAVORITES</p>
    </div>
  )
}