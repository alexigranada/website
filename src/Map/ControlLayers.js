import React from "react";
import L from 'leaflet';
import { Marker, Circle, Popup, Rectangle, FeatureGroup, LayerGroup, LayersControl, TileLayer} from "react-leaflet";
//import TurfCali from './Turf';
//import Poblacion from './Datos';
//import WFS from './WFS';
//import WFS3 from './WFS3';

L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";

const center = [3.455, -75.355]
const rectangle = [
  [51.49, -0.08],
  [51.5, -0.06],
]
const calicity = [-75.1, 3.6]

const ControlLayers = () =>{

    const key = 'W5lV2tLMxZAza9GGxomX#2.0/52.99805/-113.51074';
    const attributionsTiles = '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> ';

    return(  
      <LayersControl position="topright">
        {/**Capas Base */}
        <LayersControl.BaseLayer name="Satelital">
          <TileLayer
            attribution={attributionsTiles}
            url={'https://api.maptiler.com/tiles/satellite-v2/{z}/{x}/{y}.jpg?key='+key}
          />
        </LayersControl.BaseLayer>

        <LayersControl.BaseLayer checked name="OutDoor">
          <TileLayer
            attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
            url="https://api.maptiler.com/maps/outdoor/{z}/{x}/{y}.png?key=W5lV2tLMxZAza9GGxomX"
          />
        </LayersControl.BaseLayer>

        <LayersControl.BaseLayer name="OpenStreetMap">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>

        {/**Mis capas */}
        <LayersControl.Overlay name="Marker with popup">
          <Marker position={center}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </LayersControl.Overlay>
        
        <LayersControl.Overlay name="Layer group with circles">
          <LayerGroup>
            <Circle
              center={center}
              pathOptions={{ fillColor: 'blue' }}
              radius={250000}
            />
            <Circle
              center={center}
              pathOptions={{ fillColor: 'red' }}
              radius={150000}
              stroke={false}
            />
            <LayerGroup>
              <Marker position={calicity}/>
              <Circle
                center={[51.51, -0.08]}
                pathOptions={{ color: 'green', fillColor: 'green' }}
                radius={100000}
              />
            </LayerGroup>
          </LayerGroup>
        </LayersControl.Overlay>
        
        <LayersControl.Overlay name="Feature group">
          <FeatureGroup pathOptions={{ color: 'purple' }}>
            <Popup>Popup in FeatureGroup</Popup>
            <Circle center={[51.51, -0.06]} radius={200000} />
            <Rectangle bounds={rectangle} />
          </FeatureGroup>      
        </LayersControl.Overlay>
      </LayersControl>
    )
};
export default ControlLayers;