import './index.css';

export default function SpotCard() {
  return (
    <div className='spot-card'>
      <div className='spot-card-body'>
        <div className='spot-card-header'>
          <span className='spot-card-name'>東京タワー</span>
          <span className='spot-card-category spot-card-category--tourism'>
            観光
          </span>
          {/* お気に入り済みの場合: className='spot-card-favorite active'、fill='currentColor' に変更して確認 */}
          <button className='spot-card-favorite'>
            <svg viewBox='0 0 24 24' fill='none'>
              <path
                d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
              />
            </svg>
          </button>
        </div>
        <p className='spot-card-address'>東京都港区芝公園4丁目2-8</p>
      </div>
    </div>
  );
}
