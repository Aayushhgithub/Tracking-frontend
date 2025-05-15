import React, { useEffect, useState } from 'react';
import './App.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import {icon} from 'leaflet';
import markericon from '/marker-icon-2x.png'
import { io } from 'socket.io-client';

const socket= io("http://localhost:8000");


const ICON= icon({
  iconUrl:markericon,
  iconSize:[32, 32]
})


const Trackingpage = () => {

  const [position, setPosition] = useState([51.505, -0.09]);
   const [remotePosition, setremotePosition] = useState(null);

  if(navigator.geolocation){
    navigator.geolocation.watchPosition((position)=>{
    const {latitude, longitude}= position.coords;
    console.log(latitude,longitude);
    setPosition([latitude,longitude]);
    socket.emit("client-location-send", {latitude,longitude})
    },
   (error)=>{
    console.error("Error during getting user location", error)
   },
   {
    enableHighAccuracy:true,
 
    maximumAge:0
   }
  )
  }

  

useEffect(()=>{

socket.on("server-location-send",(data)=>{
  console.log("data", data);
  setremotePosition([data.latitude,data.longitude])
  
})
},[])

  return (
    <div >
      <h2 className='tittle'>Realtime Tracking Device</h2>
             <MapContainer center={position} zoom={13} style={{ height: '500px', width: '100vw' }}>
            <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker icon={ICON} position={position}>
                <Popup>Your Location</Popup>
            </Marker>
            {remotePosition  && <Marker position={remotePosition}> <Popup>Your friend Location</Popup> </Marker>}
        </MapContainer>
        
    </div>
  )
}

export default Trackingpage
