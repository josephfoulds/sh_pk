import React, { Component } from "react";
import { render } from "react-dom";

import Search from "./Search"
import Pokedex from "./Pokedex"
import Favorites from "./Favorites"

class App extends Component {
  render() {
    return (
      <div>
        <Search />
        <Pokedex />
        <Favorites />
      </div>
    );
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);