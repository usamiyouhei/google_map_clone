import './index.css';
import LocateButton from '../LocateButton';
import RoutePanel from '../RoutePanel';

export default function MapView() {
  return (
    <div className='map-wrapper'>
      {/* マップはreact-leafletを使用するため、ライブラリ削除後は表示されません */}
      <LocateButton />
      <RoutePanel />
    </div>
  );
}
