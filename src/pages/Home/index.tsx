import './index.css';
import MapView from '../../components/MapView';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

export default function Home() {
  return (
    <div className='home-page'>
      <Header />
      <div className='home-body'>
        <aside className='home-sidebar'>
          <Sidebar />
        </aside>
        <main className='home-map'>
          <MapView />
        </main>
      </div>
    </div>
  );
}
