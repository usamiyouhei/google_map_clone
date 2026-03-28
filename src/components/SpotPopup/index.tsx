import './index.css';

export default function SpotPopup() {
  return (
    <div className='spot-popup'>
      <div className='spot-popup-header'>
        <span className='spot-popup-name'>東京タワー</span>
        <span className='spot-popup-category spot-popup-category--tourism'>
          観光
        </span>
      </div>
      <p className='spot-popup-address'>東京都港区芝公園4丁目2-8</p>
      <div className='spot-popup-actions'>
        {/* お気に入り済みの場合: className='spot-popup-favorite active'、fill='currentColor'、テキストを'お気に入り済み'に変更して確認 */}
        <button className='spot-popup-favorite'>
          <svg viewBox='0 0 24 24' fill='none'>
            <path
              d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
            />
          </svg>
          お気に入り
        </button>
        {/* 現在地未取得（disabled）の場合: disabled 属性を追加して確認 */}
        <button className='spot-popup-route'>
          ここへのルート
        </button>
      </div>
    </div>
  );
}
