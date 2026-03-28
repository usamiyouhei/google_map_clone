import './index.css';

export default function SearchBox() {
  return (
    <div className='search-box'>
      <div className='search-box-wrapper'>
        <svg className='search-box-icon' viewBox='0 0 24 24' fill='none'>
          <path
            d='M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
          />
        </svg>
        <input
          type='text'
          className='search-box-input'
          placeholder='スポット名を検索'
        />
        {/* クリアボタンのUI（コメントインで確認）
        <button className='search-box-clear'>
          <svg viewBox='0 0 24 24' fill='none'>
            <path
              d='M18 6L6 18M6 6l12 12'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
            />
          </svg>
        </button>
        */}
      </div>
    </div>
  );
}
