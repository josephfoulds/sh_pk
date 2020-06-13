import React, { Component } from "react";
import { render } from "react-dom";
import './Search.css';

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
    this.handleKeyDown = this.handleKeyDown.bind(this);
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

  // Required to update on enter press
  handleKeyDown(e) {
    if (e.key === 'Enter') {
      this.findPokemonData();
    }
  }

  // Give focus to the search input on render
  componentDidMount(){
    this.searchInput.focus(); 
  }

  render() {
    return (
      <div className="search">
        <div>
          <input
            type="text"
            className="input"
            id="addInput"
            placeholder="Search for a Pokemon..."
            value={this.state.query}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
            ref={(input) => { this.searchInput = input; }} 
          />
        </div>
        <div>
          <button className="button" onClick={this.findPokemonData}>
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default Search;