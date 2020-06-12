import React, { Component } from "react";
import { render } from "react-dom";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.findPokemonData = this.findPokemonData.bind(this);
  }

  findPokemonData() {
    fetch("/backend/pokemon/"+this.state.query)
      .then(res => res.json())
      .then(
        (result) => {
          this.props.updatePokemon({
            name: result["name"],
            description: result["description"]
          })
        },
      )
  }

 handleChange(event) {
    this.setState({query: event.target.value});
  }

  render() {
    return (
      <div className="search" style={{backgroundColor: "#c4ffdf"}}>
          <input
            type="text"
            className="input"
            id="addInput"
            placeholder="Search for a Pokemon..."
            value={this.state.query}
            onChange={this.handleChange}
          />
          <button className="button" onClick={this.findPokemonData}>
            Search
          </button>
      </div>
    );
  }
}

export default Search;