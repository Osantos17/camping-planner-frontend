import { useState, useEffect } from 'react';
import './NationalParks.css';
import axios from 'axios';

export function NationalParks() {
  const [campings, setCampings] = useState([]);
  const [searchFilter, setSearchFilter] = useState('');
  const [totalCampsitesFilter, setTotalCampsitesFilter] = useState('');
  const [cityFilter, setCityFilter] = useState('');

  const getParkData = () => {
    axios
      .get('http://localhost:3000/parks.json')
      .then((response) => {
        console.log(response.data); 
        setCampings(response.data.data); 
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(getParkData, []);

  // const addMyPark = () => {
  //   console.log('click');
  //   propTypes.
  // }

  return (
    <div className="parksindex-page">
      <div className="parksindex">
        <h1>National Parks</h1>
        <div className="searchbars">
          <span className="search1">
            Search by Name:<br />
            <input type="text" value={searchFilter} placeholder="Yosemite..." onChange={event => setSearchFilter(event.target.value)} />
          </span>
          <br />
          <span className="search3">
            Search by City:<br />
            <input type="text" placeholder="City..." value={cityFilter} onChange={event => setCityFilter(event.target.value)} />
          </span>
          <br />
          <span className="search2">
            Search by Provided Campsites:<br />
            <input type="number" placeholder="5..." value={totalCampsitesFilter} onChange={event => setTotalCampsitesFilter(event.target.value)} />
          </span>
        </div>
        <div className="summary">
          {campings
            .filter(park => (
              park.name.toLowerCase().includes(searchFilter.toLowerCase()) &&
              (cityFilter === "" || (park.addresses[0] && park.addresses[0].city && park.addresses[0].city.toLowerCase().includes(cityFilter.toLowerCase()))) &&
              park.campsites.totalSites >= totalCampsitesFilter
            ))
            .map((park) => (
              <div className="parksummary" key={park.id}>
                <div>
                  <span>
                    <h2 className="park-name">{park.name.toUpperCase()}</h2>
                    {park.addresses && park.addresses.length > 0 && (
                      <h2 className="city-name">{park.addresses[0].city.toUpperCase()}</h2>
                    )}
                  </span>
                  <div className="parkinfo-background">
                    <div className="row">
                      <div className="col">
                        <div className='campsites'>
                          <span><h6>Total Campsites</h6>{park.campsites.totalSites}</span>
                          <span><h6>First Come First Serve</h6>{park.numberOfSitesFirstComeFirstServe}</span>
                          <span><h6>Reservable</h6>{park.numberOfSitesReservable}</span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="ratinginfo">
                          <h5>Site Info</h5>
                          {park.fees && park.fees.length > 0 && (
                            <div>
                              <p>Entry Fee - {park.fees[0].cost}</p>
                            </div>
                          )}
                          <p>Showers - {park.amenities.showers[0]}</p>
                          <p>Toilets - {park.amenities.toilets[0]}</p>
                          <p>Phone Reception - {park.amenities.cellPhoneReception}</p>
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
                <button className="button2" type="button" onClick={() => addToMyList(park.id)}>Add to my List</button>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}


