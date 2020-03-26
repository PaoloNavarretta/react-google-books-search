import React from "react";

const SearchArea = props => {
  return (
    <div className="search-area">
      <form onSubmit={props.searchBook}>
        <input onChange={props.handleSearch} type="text" />
        <button type="submit">Search</button>
        <select defaultValue="sort" onChange={props.handleSort}>
          <option disabled value="">
            Sort
          </option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </form>
    </div>
  );
};

export default SearchArea;
