import React from 'react';
import '../pages/Tracking.css';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import {Icon, divIcon} from "leaflet";
import "leaflet/dist/leaflet.css";
import MarkerClusterGroup from 'react-leaflet-cluster';

const post = [48.8566, 2.3522]
const Tracking = () => {
    const markers = [
        {
            geocode:[48.86, 2.3522],
            popUp: "PopUp 1"
        },
        {
            geocode:[48.85, 2.3522],
            popUp: "PopUp 2"
        },
        {
            geocode:[48.855, 2.34],
            popUp: "PopUp 3"
        },
    ]
    const customIcon = new Icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/256/709/709008.png" /*Tow Truck*/,
        iconSize: [38,38]
    })

    const createCustomClusterIcon = (cluster) => {
        return new divIcon({
            html: `<div class='cluster-icon'>${cluster.getChildCount()}</div>`,
            // className
            // iconSize: point(33,33, true)
        })
    }

  return (
    
    <MapContainer center={post} zoom={13} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup 
            chunkedLoading
            iconCreateFunction={createCustomClusterIcon}>
            {markers.map(marker => (
                <Marker position={marker.geocode} icon={customIcon}>
                    <Popup>{marker.popUp}</Popup>
                </Marker>
            ))
            }
        </MarkerClusterGroup>
    </MapContainer>
  )
}

export default Tracking