import React, { Component } from "react";
import { render } from "react-dom";

class Favorites extends Component {
  render() {
    // Don't render if we have no favorites
    if (this.props.favorites.length <= 0) {
      return null
    }

    return (
      <div className="favorites" style={{backgroundColor: "#ffc4cb"}}>
        <h1>
          Favorites
        </h1>
        <ul>
          {(this.props.favorites || []).map(item => (
            <li key={item.name}>
              <div>
                {item.name}<br />
                {item.description}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Favorites;