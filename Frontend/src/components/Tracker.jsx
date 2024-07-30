import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import socketIOClient from 'socket.io-client';

const socket = socketIOClient('http://localhost:4000');
const customIcon = new L.Icon({
  iconUrl: require('./path/to/custom-icon.png'),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});


const Tracker = () => {
  const [locations, setLocations] = useState([]);



  useEffect(() => {
    socket.on('receiveLocation', (location) => {
      setLocations((prevLocations) => [...prevLocations, location]);
    });

    return () => {
      socket.off('receiveLocation');
    };
  }, []);

  const handleSendLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const location = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      socket.emit('sendLocation', location);
    });
  };

  return (
    <div>
      <button onClick={handleSendLocation}>Send Location</button>
      <MapContainer center={[0, 0]} zoom={13} style={{ height: '100vh', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&Rishav; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {locations.map((location, idx) => (
          <Marker key={idx} position={[location.lat, location.lng]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Tracker