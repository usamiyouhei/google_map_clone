import { useRef, useState } from "react";
import "./index.css";
import { searchPlace, type NominatimResult } from "../../lib/nominatim";

export default function Header() {
  const [results, setResults] = useState<NominatimResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const searchTimeRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const searchAddress = async (value: string) => {
    console.log("search");

    if (!value.trim()) {
      setResults([]);
      setIsOpen(false);
      return;
    }
    setIsLoading(true);
    try {
      const data = await searchPlace(value);
      setResults(data);
      setIsOpen(data.length > 0);
      console.log(data);
    } catch (error) {
      console.error(error);
      window.alert("住所検索に失敗しました");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setQuery("");
    setResults([]);
    setIsOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    if (searchTimeRef.current) clearTimeout(searchTimeRef.current);
    searchTimeRef.current = setTimeout(() => searchAddress(value), 500);
  };

  return (
    <header className="header">
      <div className="header-logo">
        <div className="header-logo-icon">M</div>
        <span className="header-logo-text">MapExplorer</span>
      </div>
      <div className="header-search">
        <div className="address-search">
          <div className="address-search-input-wrapper">
            <svg
              className="address-search-icon"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <input
              type="text"
              className="address-search-input"
              placeholder="住所・地名を検索"
              onChange={handleInputChange}
              value={query}
            />
            {/* ローディングスピナーのUI（コメントインで確認） */}
            {isLoading && <span className="address-search-spinner" />}
            {query && !isLoading && (
              <button className="address-search-clear" onClick={handleClear}>
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M18 6L6 18M6 6l12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            )}
          </div>

          {/* 検索結果ドロップダウンのUI（コメントインで確認） */}
          {isOpen && results.length > 0 && (
            <ul className="address-search-dropdown">
              {results.map((results) => (
                <li className="address-search-item" key={results.placeId}>
                  <svg
                    className="address-search-item-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="address-search-item-text">
                    {results.displayName}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <span className="header-username">山田太郎</span>
      <button className="header-logout">ログアウト</button>
    </header>
  );
}
