import React, { Component } from "react";
import { render } from "react-dom";
import './Pokedex.css';

class Pokedex extends Component {
  constructor(props) {
    super(props);

    // this bindings for functions
    this.addFavorite = this.addFavorite.bind(this);
  }

  // Update the favorites through the setter passed via props
  // nb: Pokemon data held here is actually held by the parent so not strictly neccessary to be passed to the function call,
  // however, this would likely make the component more reusable, hence why it is passed back.
  addFavorite() {
    this.props.addFavorite({
      name: this.props.pokemon["name"],
      description: this.props.pokemon["description"],
    })
  }

  render() {
    // Don't render if we are not inspecting a pokemon's information
    if (!this.props.pokemon) {
      return null
    }

    return (
      <div className="pokedex">
        <h2 id="name">
          {this.props.pokemon["name"]}
        </h2>
        <span>
          {this.props.pokemon["description"]}
        </span>
        <div>
          <button className="button" onClick={this.addFavorite}>
            Add to Favorites
          </button>
        </div>
      </div>
    );
  }
}

export default Pokedex;