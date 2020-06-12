import React, { Component } from "react";
import { render } from "react-dom";

class Search extends Component {
  constructor(props) {
    super(props);

    // Initialize the state, query must default to empty string rather than null as it is passed to a value parameter
    this.state = {
      query: "",
    };

    // this bindings for functions
    this.handleChange = this.handleChange.bind(this);
    this.findPokemonData = this.findPokemonData.bind(this);
  }

  // Backend GET call to retrieve pokemon information from backend service
  findPokemonData() {
    fetch("/backend/pokemon/"+this.state.query)
      .then(res => res.json())
      .then(
        (result) => {
          // Update the pokemon through the setter passed via props
          this.props.updatePokemon({
            name: result["name"],
            description: result["description"]
          })
        },
      )
  }

  // Required to ensure that the query state variable is updated on change of input
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