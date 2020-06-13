import React, { Component } from "react";
import { render } from "react-dom";

class Favorites extends Component {
  render() {
    // Don't render if we have no favorites
    if (Object.keys(this.props.favorites).length <= 0) {
      return null
    }

    return (
      <div className="favorites" style={{backgroundColor: "#ffc4cb"}}>
        <h1>
          Favorites
        </h1>
        <ul>
          {Object.entries(this.props.favorites).map(entry => (
            <li key={entry[0]}>
              <div>
                {entry[0]}<br />
                {entry[1]}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Favorites;