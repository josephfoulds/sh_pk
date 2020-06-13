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
      favorites: JSON.parse(localStorage.getItem('favorites') || ("{}")),
      pokemon: null,
    };

    // this bindings for functions
    this.updatePokemon = this.updatePokemon.bind(this);
    this.addFavorite = this.addFavorite.bind(this);
    this.delFavorite = this.delFavorite.bind(this);
  }

  // Used to update the current viewed pokemon
  updatePokemon(pokemon) {
    this.setState({
      pokemon: pokemon
    });
  }

  // Used to add a pokemon to the favorites list
  addFavorite(pokemon) {
    let favorites = this.state.favorites;
    favorites[pokemon.name] = pokemon.description

    localStorage.setItem('favorites', JSON.stringify(favorites));

    this.setState({
      favorites: favorites
    })
  }

  // Used to add a pokemon to the favorites list
  delFavorite(name) {
    let favorites = this.state.favorites;
    delete favorites[name]

    localStorage.setItem('favorites', JSON.stringify(favorites));

    this.setState({
      favorites: favorites
    })
  }

  // Component driven design
  render() {
    return (
      <div>
        <Search updatePokemon={this.updatePokemon}/>
        <Pokedex pokemon={this.state.pokemon} addFavorite={this.addFavorite} favorites={this.state.favorites}/>
        <Favorites favorites={this.state.favorites} delFavorite={this.delFavorite}/>
      </div>
    );
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);