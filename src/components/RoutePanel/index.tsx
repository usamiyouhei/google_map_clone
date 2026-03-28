import './index.css';

export default function RoutePanel() {
  return (
    <div className='route-panel'>
      <div className='route-panel-info'>
        <span className='route-panel-distance'>2.3 km</span>
        <span className='route-panel-separator'>·</span>
        <span className='route-panel-duration'>約 28 分</span>
      </div>
      <button className='route-panel-clear'>
        クリア
      </button>
    </div>
  );
}
