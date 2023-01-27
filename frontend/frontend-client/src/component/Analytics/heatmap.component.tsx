import { LatLngExpression } from 'leaflet';
import React from 'react';
import {
  MapContainer,
  Circle,
  CircleMarker,
  TileLayer,
  Popup,
} from 'react-leaflet';

interface IHotspot {
  center: LatLngExpression;
  problem: string;
  radius: number;
}

const Heatmap = () => {
  const center: LatLngExpression = [24.911, 91.841];

  const hotSpots: IHotspot[] = [
    {
      center: [24.911, 91.85],
      problem: 'Arsenic',
      radius: 8,
    },
    {
      center: [24.911, 91.87],
      problem: 'Arsenic',
      radius: 11,
    },
    {
      center: [24.911, 91.875],
      problem: 'Arsenic',
      radius: 11,
    },
    {
      center: [24.912, 91.875],
      problem: 'Arsenic',
      radius: 11,
    },
    {
      center: [24.913, 91.875],
      problem: 'Arsenic',
      radius: 11,
    },
    {
      center: [24.91, 91.87],
      problem: 'Arsenic',
      radius: 11,
    },
    {
      center: [24.911, 91.879],
      problem: 'Arsenic',
      radius: 6,
    },
    {
      center: [24.911, 91.82],
      problem: 'Arsenic',
      radius: 5,
    },
    {
      center: [24.917, 91.82],
      problem: 'Arsenic',
      radius: 9,
    },
  ];

  const redOptions = { color: 'red' };

  return (
    <MapContainer center={center} zoom={12} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {/* <Circle center={center} pathOptions={fillBlueOptions} radius={200} /> */}
      {hotSpots.map((spot: IHotspot) => (
        <CircleMarker
          center={spot.center}
          pathOptions={redOptions}
          radius={spot.radius}>
          <Popup>{spot.problem}</Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
};

export default Heatmap;
