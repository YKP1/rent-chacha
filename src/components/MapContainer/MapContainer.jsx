import React from "react";
import { MapContainer as Mc, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./MapContainer.scss";

const MapContainer = ({ torontoList }) => {
  const position = [torontoList.latitude, torontoList.longitude];

  return (
    <Mc center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[torontoList.latitude, torontoList.longitude]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </Mc>
  );
};

export default MapContainer;
