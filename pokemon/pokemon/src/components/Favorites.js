import React, { Component } from "react";
import { render } from "react-dom";

class Favorites extends Component {
  render() {
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
            <li key={item}>
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