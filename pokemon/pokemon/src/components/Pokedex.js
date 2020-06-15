import React, { Component } from "react";
import { render } from "react-dom";
import './Pokedex.css';

class Favorite extends React.Component {
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
    // If the pokemon is already in the favorites, don't give the option to add it to favorites
    if (this.props.pokemon["name"] in this.props.favorites) {
      return null
    }

    return (
      <div>
        <button className="button" onClick={this.addFavorite}>
          Add to Favorites
        </button>
      </div>
    )
  }
}

class Pokedex extends Component {
  render() {
    // Don't render if we are not inspecting a pokemon's information
    if (!this.props.pokemon) {
      return null
    }

    return (
      <div className="pokedex">
        <h1 id="name">
          {this.props.pokemon["name"]}
        </h1>
        <span>
          {this.props.pokemon["description"]}
        </span>
        <Favorite addFavorite={this.props.addFavorite} pokemon={this.props.pokemon} favorites={this.props.favorites}/>
      </div>
    );
  }
}

export default Pokedex;