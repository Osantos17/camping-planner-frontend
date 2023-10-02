import { useState, useEffect } from 'react'
import "./NationalParks.css"


export function NationalParks () {
  const [campings, setCampings] = useState([])
  const [setParks] = useState([])
  const [searchFilter, setSearchFilter] = useState ("")
  const [totalCampsitesFilter, setTotalCampsitesFilter] = useState ("")

  useEffect(() => {
      fetch(
        `https://developer.nps.gov/api/v1/campgrounds?parkCode=&stateCode=&limit=1000&api_key=${import.meta.env.VITE_SOME_KEY}`
      )
      .then((res) => res.json())
      .then((json) => {
        const parkList = json.data;
        setCampings(parkList)
        console.log(parkList);
        const testList = json.data[0].id;
        console.log(testList);
      });
  }, [] ); 

  useEffect(() => {
    fetch(
      `https://developer.nps.gov/api/v1/campgrounds?parkCode=&stateCode=&limit=1000&api_key=${import.meta.env.VITE_SOME_KEY}`
    )
    .then((res) => res.json())
    .then((json) => {
      const parkList = json.data;
      setParks(parkList)
      console.log(parkList);
      const testList = json.data[0].id;
      console.log(testList);
    });
}, [] ); 
  

  return(
    <div className="parksindex-page">
      <div className="parksindex">
        <h1>
          National Parks
        </h1>
        <div className="searchbars">
          <span className="search1">Name Search:<br /><input type="text" value={searchFilter} placeholder="Yosemite.." onChange={event=>setSearchFilter(event.target.value)} list="names" /></span>  
          <br/>
          <span className="search2">Campsite # Search:<br /><input type="number" placeholder="5.." value={totalCampsitesFilter} onChange={event=>setTotalCampsitesFilter(event.target.value)} list="names" /></span>
        </div>
        <div className="summary">
          {campings.filter(park => park.name.toLowerCase().includes(searchFilter.toLowerCase()) && park.campsites.totalSites >= totalCampsitesFilter).map((park) => (
            <div className="parksummary" key={park.id}>
              <div>
                <h2 className="park-name">{park.name.toUpperCase()}</h2>
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
                      <div className = "ratinginfo">
                        <h5>Site Info</h5>
                        {park.fees && park.fees.length > 0 && (
                        <div>
                          <p>Entry Fee - {park.fees[0].cost}</p>
                        </div>  )}
                        <p>Showers - {park.amenities.showers[0]}</p>
                        <p>Toilets - {park.amenities.toilets[0]}</p>
                        <p>Phone Reception - {park.amenities.cellPhoneReception}</p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="parkinfo">
                        <span><h5>Description</h5>{park.description}</span>
                      </div>
                    <div />  
                  </div>  
                </div>  
                {/* {park.images && park.images.length > 0 && (
                  <img src={park.images[0].url} width="50" height="60" alt="Park Image" />
                )} */}
              </div>
              <button className="button2" type="submit">Add to my List</button>
            </div>
          </div>
          ))}
        </div>
      </div>  
    </div>
  )
}