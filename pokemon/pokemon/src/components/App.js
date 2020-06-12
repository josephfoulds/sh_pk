import React, { Component } from "react";
import { render } from "react-dom";

import Search from "./Search"
import Pokedex from "./Pokedex"
import Favorites from "./Favorites"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: null,
      pokemon: null,
    };
    
    this.updatePokemon = this.updatePokemon.bind(this);
  }

  updatePokemon(pokemon) {
    this.setState({
      pokemon: pokemon
    })
  }

  render() {
    return (
      <div>
        <Search updatePokemon={this.updatePokemon}/>
        <Pokedex pokemon={this.state.pokemon}/>
        <Favorites favorites={this.state.favorites}/>
      </div>
    );
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);