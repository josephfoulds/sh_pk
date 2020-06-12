import React, { Component } from "react";
import { render } from "react-dom";

class Pokedex extends Component {
  render() {
    return (
      <div className="pokedex" style={{backgroundColor: "#c7dcff"}}>
        <h1>Pokedex</h1>
        <h2>
          Pokemon Name
        </h2>
        <span>
          Pokemon Description
        </span>
      </div>
    );
  }
}

export default Pokedex;