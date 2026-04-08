import "./index.css";
import SpotCard from "../SpotCard";
import { useAtomValue } from "jotai";
import { favoritesAtom } from "../../modules/favorites/favorite.state";

export default function FavoriteList() {
  const favorites = useAtomValue(favoritesAtom);
  /* 空状態のUI（コメントインで確認）
  return <div className='favorite-list-empty'>お気に入りがありません</div>;
  */
  if (favorites.length === 0)
    return <div className="favorite-list-empty">お気に入りがありません</div>;
  return (
    <div className="favorite-list">
      {favorites.map((spot) => (
        <SpotCard key={spot.id} spot={spot} />
      ))}
    </div>
  );
}
