import React, { Component } from "react";
import { render } from "react-dom";

class Pokedex extends Component {
  render() {
    if (!this.props.pokemon) {
      return null
    }

    return (
      <div className="pokedex" style={{backgroundColor: "#c7dcff"}}>
        <h1>
          Pokedex
        </h1>
        <h2>
          {this.props.pokemon["name"]}
        </h2>
        <span>
          {this.props.pokemon["description"]}
        </span>
      </div>
    );
  }
}

export default Pokedex;