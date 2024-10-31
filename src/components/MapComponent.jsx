// components/MapComponent.jsx
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './MapComponent.css'; // Import the CSS file for styles
import Navbar from './Navbar';

mapboxgl.accessToken = 'pk.eyJ1IjoidGFudmlwNzk5OTkiLCJhIjoiY20yaDlicmRnMDQ2ajJpcXh1MXd1NGF0ayJ9.N8cWurKQsFuHf5bTnlIKSw';

const MapComponent = () => {
  // localStorage.setItem('theme', 'light');
  const mapContainerRef = useRef(null);
  const [startLocation, setStartLocation] = useState({ lat: null, lng: null });
  const [endLocation, setEndLocation] = useState({ lat: null, lng: null });
  const [startInput, setStartInput] = useState('');
  const [endInput, setEndInput] = useState('');
  const [co2Reduction, setCo2Reduction] = useState(0); // Placeholder for CO2 reduction data

  useEffect(() => {
    if (!mapContainerRef.current) return;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.5, 40], // Default center
      zoom: 9,
    });

    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    const getRoute = async () => {
      if (!startLocation.lat || !startLocation.lng || !endLocation.lat || !endLocation.lng) return;

      const response = await fetch(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${startLocation.lng},${startLocation.lat};${endLocation.lng},${endLocation.lat}?geometries=geojson&access_token=${mapboxgl.accessToken}`
      );

      if (!response.ok) {
        console.error('Error fetching route:', response.statusText);
        return;
      }

      const data = await response.json();
      const route = data.routes[0].geometry.coordinates;

      map.on('load', () => {
        map.addSource('route', {
          type: 'geojson',
          data: {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: route,
            },
          },
        });

        map.addLayer({
          id: 'route',
          type: 'line',
          source: 'route',
          layout: {
            'line-cap': 'round',
            'line-join': 'round',
          },
          paint: {
            'line-color': '#00FF00', // Green color for the route
            'line-width': 6,
          },
        });

        const bounds = new mapboxgl.LngLatBounds();
        route.forEach(coord => bounds.extend(coord));
        map.fitBounds(bounds, { padding: 20 });

        // Placeholder for CO2 reduction calculation
        setCo2Reduction((data.routes[0].distance / 1000) * 0.15); // Example calculation based on distance
      });
    };

    getRoute();

    return () => map.remove();
  }, [startLocation, endLocation]);

  const handleStartChange = (e) => {
    setStartInput(e.target.value);
  };

  const handleEndChange = (e) => {
    setEndInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Geocode the start location
    const startResponse = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(startInput)}.json?access_token=${mapboxgl.accessToken}`);
    const startData = await startResponse.json();
    if (startData.features.length > 0) {
      setStartLocation({
        lat: startData.features[0].center[1],
        lng: startData.features[0].center[0],
      });
    }

    // Geocode the end location
    const endResponse = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(endInput)}.json?access_token=${mapboxgl.accessToken}`);
    const endData = await endResponse.json();
    if (endData.features.length > 0) {
      setEndLocation({
        lat: endData.features[0].center[1],
        lng: endData.features[0].center[0],
      });
    }
  };

  return (
<div className="map-container">
      <h1 className="map-header">Find the Greenest Route to Save CO2!</h1>
      <form onSubmit={handleSubmit} className="location-form">
        <input
          type="text"
          placeholder="Start Location"
          value={startInput}
          onChange={handleStartChange}
          required
          className="location-input"
        />
        <input
          type="text"
          placeholder="End Location"
          value={endInput}
          onChange={handleEndChange}
          required
          className="location-input"
        />
        <button type="submit" className="get-route-button">Get Route</button>
      </form>
      <div ref={mapContainerRef} className="map" />
      {co2Reduction > 0 && (
        <div className="co2-reduction-card">
          <h2 className="text-3xl font-bold text-green-800">Estimated Co2 emmission reduction: 21%</h2>
        </div>
      )}
    </div>
  );
};

export default MapComponent;
