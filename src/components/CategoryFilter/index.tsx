import './index.css';

export default function CategoryFilter() {
  return (
    <div className='category-filter'>
      <div className='category-filter-list'>
        {/* active クラスを付けたいボタンに ' active' を追加して切り替え確認 */}
        <button className='category-filter-chip active'>すべて</button>
        <button className='category-filter-chip'>カフェ</button>
        <button className='category-filter-chip'>レストラン</button>
        <button className='category-filter-chip'>公園</button>
        <button className='category-filter-chip'>ショッピング</button>
        <button className='category-filter-chip'>観光</button>
        <button className='category-filter-chip'>コンビニ</button>
        <button className='category-filter-chip'>病院</button>
        <button className='category-filter-chip'>駅</button>
      </div>
    </div>
  );
}
