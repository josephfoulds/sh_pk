import React, { Component } from "react";
import { render } from "react-dom";

class Search extends Component {
  render() {
    return (
      <div className="search" style={{backgroundColor: "#c4ffdf"}}>
        <form className="form" id="addItemForm">
          <input
            type="text"
            className="input"
            id="addInput"
            placeholder="Search for a Pokemon..."
          />
          <button className="button">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default Search;