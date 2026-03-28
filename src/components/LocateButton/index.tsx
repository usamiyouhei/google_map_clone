import './index.css';

export default function LocateButton() {
  return (
    <div className='locate-button-wrapper'>
      {/* ローディング中の場合: className='locate-button locate-button--loading'、disabled 属性を追加して確認 */}
      <button
        className='locate-button'
        title='現在地を表示'
      >
        <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round'>
          <circle cx='12' cy='12' r='4' fill='currentColor' stroke='none' />
          <line x1='12' y1='2' x2='12' y2='7' />
          <line x1='12' y1='17' x2='12' y2='22' />
          <line x1='2' y1='12' x2='7' y2='12' />
          <line x1='17' y1='12' x2='22' y2='12' />
          <circle cx='12' cy='12' r='8' />
        </svg>
      </button>
    </div>
  );
}
