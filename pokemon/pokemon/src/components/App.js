import React, { Component } from "react";
import { render } from "react-dom";

import Search from "./Search"
import Pokedex from "./Pokedex"
import Favorites from "./Favorites"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [],
      pokemon: null,
    };

    this.updatePokemon = this.updatePokemon.bind(this);
    this.addFavorite = this.addFavorite.bind(this);
  }

  updatePokemon(pokemon) {
    this.setState({
      pokemon: pokemon
    });
  }

  addFavorite(pokemon) {
    this.setState(prevState => ({
      favorites: [...prevState.favorites, pokemon]
    }))
  }

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