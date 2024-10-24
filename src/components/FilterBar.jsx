import "../styles/FilterBar.css";
import { FilterBarPropTypes } from "./propTypes";

function FilterBar({ filters, removeFilter, clearFilters }) {
  return (
    <div className="filter-bar">
      <div className="selected-filters">
        {/* Show all active filters */}
        {filters.map((filter, index) => (
          <span key={index} className="filter-tag">
            {filter}
            <button onClick={() => removeFilter(filter)}>X</button>
          </span>
        ))}
      </div>
      {/* Clear all filters */}
      <button className="clear-button" onClick={clearFilters}>
        Clear
      </button>
    </div>
  );
}

FilterBar.propTypes = FilterBarPropTypes;

export default FilterBar;
