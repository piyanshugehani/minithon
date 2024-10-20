// MapComponent.jsx
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';

const MapComponent = ({ startLocation, endLocation }) => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.5, 40], // Set to a default center
      zoom: 9,
    });

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Fetch directions and add the route to the map
    const getRoute = async () => {
      if (!startLocation || !endLocation) return;

      const response = await fetch(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${startLocation.lng},${startLocation.lat};${endLocation.lng},${endLocation.lat}?geometries=geojson&access_token=${mapboxgl.accessToken}`
      );

      const data = await response.json();
      const route = data.routes[0].geometry.coordinates;

      // Add the route to the map
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
            'line-color': '#888',
            'line-width': 8,
          },
        });

        // Center the map on the route
        const bounds = new mapboxgl.LngLatBounds();
        route.forEach(coord => bounds.extend(coord));
        map.fitBounds(bounds, { padding: 20 });
      });
    };

    getRoute();

    // Clean up on component unmount
    return () => map.remove();
  }, [startLocation, endLocation]);

  return <div ref={mapContainerRef} className="map-container" style={{ width: '100%', height: '400px' }} />;
};

export default MapComponent;
