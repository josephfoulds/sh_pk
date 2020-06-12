import React, { Component } from "react";
import { render } from "react-dom";

class Pokedex extends Component {
  constructor(props) {
    super(props);

    this.addFavorite = this.addFavorite.bind(this);
  }

  addFavorite() {
    this.props.addFavorite({
      name: this.props.pokemon["name"],
      description: this.props.pokemon["description"],
    })
  }

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
        <button className="button" onClick={this.addFavorite}>
          Add to Favorites
        </button>
      </div>
    );
  }
}

export default Pokedex;