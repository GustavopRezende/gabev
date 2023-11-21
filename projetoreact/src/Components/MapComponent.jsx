import React from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import customIcon from './—Pngtree—location vector icon_3722521.png';

const MapComponent = () => {
  const initialPosition = [-22.975278, -43.1875];
  const markers = [
    { position: [-22.975278, -43.1875], text: 'Edifício Lellis' },
    { position: [-22.911944, -43.176111], text: 'Edificio Francisco Serrador' },
    { position: [-22.903333, -43.189444], text: 'Palácio Duque de Caxias' },
  ];

  const customMarkerIcon = L.icon({
    iconUrl: customIcon,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });

  return (
    <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
      <MapContainer center={initialPosition} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.position} icon={customMarkerIcon}>
            <Popup>{marker.text}</Popup>
          </Marker>
        ))}
      </MapContainer>
      <div style={{ position: 'absolute', bottom: '20px', right: '20px', zIndex: '1000' }}>
        <Link to="/feed">
          <button style={{ padding: '10px', fontSize: '16px' }}>Ir Feed</button>
        </Link>
      </div>
    </div>
  );
};

export default MapComponent;



