import React from "react";

const SearchArea = props => {
  return (
    <div className="search-area">
      <form onSubmit={props.searchBook} className="form-search">
        <input
          className="search-input"
          onChange={props.handleSearch}
          type="text"
          placeholder="type here..."
        />
        <button type="submit" className="btn-search">
          Search
        </button>
        <select
          defaultValue="sort"
          onChange={props.handleSort}
          className="custom-select"
        >
          <option disabled value="sort">
            Sort Books
          </option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </form>
    </div>
  );
};

export default SearchArea;
