import React, { Component } from "react";
import { render } from "react-dom";

class Favorites extends Component {
  render() {
    return (
      <div className="favorites" style={{backgroundColor: "#ffc4cb"}}>
        <h1>
          Favorites
        </h1>
        <ul>
          <li>Pokemon A</li>
          <li>Pokemon B</li>
        </ul>
      </div>
    );
  }
}

export default Favorites;