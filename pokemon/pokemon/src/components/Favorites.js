import React, { Component } from "react";
import { render } from "react-dom";

class Favorites extends Component {
  render() {
    if (!this.props.favorites) {
      return null
    }
    
    return (
      <div className="favorites" style={{backgroundColor: "#ffc4cb"}}>
        <h1>
          {this.props.favorites}
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