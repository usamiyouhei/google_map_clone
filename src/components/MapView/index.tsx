import "./index.css";
import LocateButton from "../LocateButton";
import RoutePanel from "../RoutePanel";
import { MapContainer, TileLayer } from "react-leaflet";

export default function MapView() {
  return (
    <div className="map-wrapper">
      <MapContainer
        center={[35.6812, 139.7671]}
        zoom={15}
        className="map-container"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
      {/* マップはreact-leafletを使用するため、ライブラリ削除後は表示されません */}
      <LocateButton />
      <RoutePanel />
    </div>
  );
}
