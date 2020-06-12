import React, { Component } from "react";
import { render } from "react-dom";

// Import components from their modules
import Search from "./Search"
import Pokedex from "./Pokedex"
import Favorites from "./Favorites"

class App extends Component {
  constructor(props) {
    super(props);

    // Initialize the state, and pull in the favorites from localStorage
    this.state = {
      favorites: JSON.parse(localStorage.getItem('favorites') || ("[]")),
      pokemon: null,
    };

    // this bindings for functions
    this.updatePokemon = this.updatePokemon.bind(this);
    this.addFavorite = this.addFavorite.bind(this);
  }

  // Used to update the current viewed pokemon
  updatePokemon(pokemon) {
    this.setState({
      pokemon: pokemon
    });
  }

  // Used to add a pokemon to the favorites list
  addFavorite(pokemon) {
    // Contactenate the existing favorites with the new favorite added, stringify it, and push it to local storage
    localStorage.setItem('favorites', JSON.stringify(this.state.favorites.concat([pokemon])));

    // Avoid race conditions by accessing the previous state through the setState function
    this.setState(prevState => ({
      favorites: [...prevState.favorites, pokemon]
    }))
  }

  // Component driven design
  render() {
    return (
      <div>
        <Search updatePokemon={this.updatePokemon}/>
        <Pokedex pokemon={this.state.pokemon} addFavorite={this.addFavorite}/>
        <Favorites favorites={this.state.favorites}/>
      </div>
    );
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);