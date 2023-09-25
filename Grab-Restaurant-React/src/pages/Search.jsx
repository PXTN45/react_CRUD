/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const Search = ({ searchText, setSearchText }) => {
  return (
    <div className="container-fluid">
      <din className="row">
        <div className="col"></div>
        <div className="col"></div>
        <div id="search" className="col-3">
          <form className="d-flex">
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Search"
              value={searchText}
              onChange={(event) => {
                setSearchText(event.target.value);
              }}
            />
          </form>
        </div>
      </din>
    </div>
  );
};

export default Search;
