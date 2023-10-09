import { useEffect, useState } from 'react';
import Radar from 'radar-sdk-js';
import 'radar-sdk-js/dist/radar.css';

export function RadarMap() {
  const [coordinates, setCoordinates] = useState(null);

  const errorCallback = (error) => {
    console.error(error);
  };

  useEffect(() => {
    // Get user's coordinates
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }, []);

  const successCallback = (position) => {
    console.log(position);
    setCoordinates(position.coords);
  };

  useEffect(() => {
    if (coordinates) {
      // Initialize Radar SDK
      Radar.initialize('prj_live_pk_de82543ab49a7a7b86fc1d55c635cf2af48357e3');

      // Create a map only when coordinates are available
      const map = new Radar.ui.map({
        container: 'map',
        style: 'radar-light-v1',
        center: [coordinates.longitude, coordinates.latitude,],
        zoom: 5,
      });

      // Add a marker to the map
      Radar.ui.marker({ text: 'Current' })
        .setLngLat([coordinates.longitude, coordinates.latitude])
        .addTo(map);
      
        Radar.ui.marker({ text: 'First Marker' })
        .setLngLat([-119.538329, 37.855885])
        .addTo(map);
      
    }
  }, [coordinates]);

  return (
    <div id="map-container" style={{ height: '100%', position: 'absolute', width: '100%' }}>
      <div id="map" style={{ height: '100%', position: 'absolute', width: '100%' }} />
    </div>
  );
}
