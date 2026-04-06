import { CATEGORY_LABELS } from "../../modules/spots/spot.entity";
import "./index.css";

const categories = [
  { value: "", label: "全て" },
  ...Object.entries(CATEGORY_LABELS).map(([value, label]) => ({
    value,
    label,
  })),
];

export default function CategoryFilter() {
  return (
    <div className="category-filter">
      <div className="category-filter-list">
        {categories.map((category) => (
          <button key={category.value} className="category-filter-chip">
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
}
