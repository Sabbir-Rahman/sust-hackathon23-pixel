import { LatLngExpression } from "leaflet";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  Circle,
  CircleMarker,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

const App = () => {
  const center: LatLngExpression | undefined = [24.911, 91.841];

  const polyline = [
    [51.505, -0.09],
    [51.51, -0.1],
    [51.51, -0.12],
  ];

  const multiPolyline = [
    [
      [51.5, -0.1],
      [51.5, -0.12],
      [51.52, -0.12],
    ],
    [
      [51.5, -0.05],
      [51.5, -0.06],
      [51.52, -0.06],
    ],
  ];

  const polygon = [
    [51.515, -0.09],
    [51.52, -0.1],
    [51.52, -0.12],
  ];

  const multiPolygon = [
    [
      [51.51, -0.12],
      [51.51, -0.13],
      [51.53, -0.13],
    ],
    [
      [51.51, -0.05],
      [51.51, -0.07],
      [51.53, -0.07],
    ],
  ];

  const rectangle = [
    [51.49, -0.08],
    [51.5, -0.06],
  ];

  const fillBlueOptions = { fillColor: "blue" };
  const blackOptions = { color: "black" };
  const limeOptions = { color: "lime" };
  const purpleOptions = { color: "purple" };
  const redOptions = { color: "red" };
  return (
    <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Circle center={center} pathOptions={fillBlueOptions} radius={200} />
      <CircleMarker
        center={[23.77, 90.399]}
        pathOptions={redOptions}
        radius={20}
      >
        <Popup>Popup in CircleMarker</Popup>
      </CircleMarker>
      <CircleMarker
        center={[24.912, 91.841]}
        pathOptions={limeOptions}
        radius={20}
        interactive
      >
        <Popup>Garbage Problem</Popup>
      </CircleMarker>
      <CircleMarker
        center={[24.915, 91.842]}
        pathOptions={limeOptions}
        radius={30}
      >
        <Popup>Water Problem</Popup>
      </CircleMarker>
      {/* <Polyline pathOptions={limeOptions} positions={polyline} />
    <Polyline pathOptions={limeOptions} positions={multiPolyline} />
    <Polygon pathOptions={purpleOptions} positions={polygon} />
    <Polygon pathOptions={purpleOptions} positions={multiPolygon} />
    <Rectangle bounds={rectangle} pathOptions={blackOptions} /> */}
    </MapContainer>
  );
};

export default App;
