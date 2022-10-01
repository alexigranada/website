import React, { useState, useEffect } from 'react';
import { MapContainer, ScaleControl, useMapEvents, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MouseCoordinates from './MausePosition';
//import WFS from './WFS'
import ControlLayers from './ControlLayers';
//import Geoman from './Geoman';

const initialPunto = {
  name: "",
  location: {
    type: ""
  },
};

const MapView = () => {
  const position = [3.505, -75.09];
  const [state, setState] = useState({
      currentLocation: {lat: '3.45', lng: '-75.35'},
      zoom: 3
  });

  const [pointData, setPointData] = useState(initialPunto);
  //Capturar Punto
  const MapEvents = () => {
    useMapEvents({
      click(e) {
        // setState your coords here
        // coords exist in "e.latlng.lat" and "e.latlng.lng"
        var latitud = e.latlng.lat;
        var longitud = e.latlng.lng;


        console.log("Latitud: " + latitud);
        console.log("Longitud: " + longitud);
      },
    });
    return false;
}

function LocationMarker() {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        setPosition(e.latlng)
        //map.flyTo(e.latlng, map.getZoom())
      },
    })
  
    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    )
  };

  function MarkerP() {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
      click(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
        //map.locate()
      },
      //locationfound(e) {
        //setPosition(e.latlng)
        //map.flyTo(e.latlng, map.getZoom())
      //},
    })
  
    return position === null ? null : (
      <Marker position={position}>
        <Popup>Position: {position.lat.toFixed(3)}, {position.lng.toFixed(3)}
          <button className='boton_punto'>Guardar</button>
        </Popup>
      </Marker>
    )
  }

  return <MapContainer center={state.currentLocation} zoom={state.zoom} scrollWheelZoom={true}>      
          <ControlLayers/>
          <ScaleControl maxWidth={200} updateWhenIdle={true}/>
          <div style={{paddingBottom: "17px"}} className="leaflet-bottom leaflet-right"> {/**className="leaflet-bottom leaflet-right" */}
            <MouseCoordinates />
          </div>
          <MapEvents /> 
          <LocationMarker />
          <MarkerP />
        </MapContainer>
}

export default MapView;