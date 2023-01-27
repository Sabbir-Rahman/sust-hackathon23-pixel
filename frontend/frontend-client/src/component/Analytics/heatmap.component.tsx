import { LatLngExpression } from "leaflet";
import { number } from "prop-types";
import { useEffect, useState } from "react";
import { CircleMarker, MapContainer, Popup, TileLayer } from "react-leaflet";
import useSWR from "swr";
import Layout from "../Common/Layout";

interface IHotspot {
  lat: number;
  long: number;
  radius: number;
  tag: string;
  category: string;
}

const Heatmap = () => {
  const center: LatLngExpression = [24.911, 91.841];
  const { data } = useSWR(`/backend-blog/post/view/global`);
  const [hotspots, setHotspots] = useState<IHotspot[]>();

  const getHotSpots = () => {
    const tempData: IHotspot[] = [];
    data?.data?.map((item: any) => {
      if (item?.location?.coordinates?.length > 0) {
        tempData.push({
          lat: item.location.coordinates[1],
          long: item.location.coordinates[0],
          radius: item.reactions.upvote,
          tag: item?.tags?.[0],
          category: item?.problemTag,
        });
      }
    });

    setHotspots(tempData);
  };

  useEffect(() => {
    if (data) {
      getHotSpots();
    }
  }, [data]);

  //  const categories = ["Human", "Social", "Economic", "Environment", "Other"];

  interface IObjectKeys {
    [key: string]: object;
  }
  const mapColor: IObjectKeys = {
    Human: { color: "red" },
    Social: { color: "blue" },
    Economic: { color: "yellow" },
    Environment: { color: "green" },
    Other: { color: "gray" },
  };

  return (
    <Layout>
      <MapContainer
        center={center}
        zoom={12}
        scrollWheelZoom={true}
        className="relative"
      >
        <button className="py-2 px-8 absolute top-20 left-20">Show View</button>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <Circle center={center} pathOptions={fillBlueOptions} radius={200} /> */}
        {hotspots?.map((spot: IHotspot, index: number) => (
          <CircleMarker
            key={index}
            center={[spot.lat, spot.long]}
            pathOptions={mapColor[spot.category]}
            radius={spot.radius}
          >
            <Popup>{spot.tag || ""}</Popup>
          </CircleMarker>
        ))}
      </MapContainer>
    </Layout>
  );
};

export default Heatmap;
