import React, { Component } from "react";
import { render } from "react-dom";
import './Favorites.css';

class Favorites extends Component {
  render() {
    // Don't render if we have no favorites
    if (Object.keys(this.props.favorites).length <= 0) {
      return null
    }

    return (
      <div className="favorites">
        <h1>
          Favorites
        </h1>
        <ul>
          {Object.entries(this.props.favorites).map(entry => (
            <li key={entry[0]}>
              <div>
                <span className="name">{entry[0]}</span>
                <br />
                <span className="description">{entry[1]}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Favorites;