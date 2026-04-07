import "./index.css";
import SearchBox from "../SearchBox";
import CategoryFilter from "../CategoryFilter";
import SpotList from "../SpotList";
import { spotRepository } from "../../modules/spots/spot.repository";
import { useEffect } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { spotsAtom } from "../../modules/spots/spots.state";
import { filterStateAtom } from "../../modules/spots/filter.state";
// import FavoriteList from '../FavoriteList'; // お気に入りタブUIを確認する場合はコメントインして使用

export default function Sidebar() {
  const setSpots = useSetAtom(spotsAtom);
  const filterState = useAtomValue(filterStateAtom);

  const fetchSpots = async () => {
    const spots = await spotRepository.getSpots({
      category: filterState.category,
      search: filterState.searchQuery,
    });
    setSpots(spots);
  };

  useEffect(() => {
    fetchSpots();
  }, [filterState]);

  return (
    <div className="sidebar">
      <div className="sidebar-tabs">
        {/* スポット一覧タブ（アクティブ状態）
            お気に入りタブに切り替えたい場合は、下のコメントのように active クラスを移動する */}
        <button className="sidebar-tab active">スポット一覧</button>
        <button className="sidebar-tab">お気に入り</button>
      </div>

      {/* スポット一覧タブのUI（デフォルト表示） */}
      <>
        <div className="sidebar-search">
          <SearchBox />
        </div>
        <div className="sidebar-filter">
          <CategoryFilter />
        </div>
        <div className="sidebar-content">
          <SpotList />
        </div>
      </>

      {/* お気に入りタブのUI（コメントインで確認）
      <div className='sidebar-content'>
        <FavoriteList />
      </div>
      */}
    </div>
  );
}
