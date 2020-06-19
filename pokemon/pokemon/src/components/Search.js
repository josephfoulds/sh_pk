import React, { Component } from "react";
import { render } from "react-dom";
import './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);

    // Initialize the state, query must default to empty string rather than null as it is passed to a value parameter
    this.state = {
      query: "",
      showError: false,
      cache: {},
    };

    // this bindings for functions
    this.handleChange = this.handleChange.bind(this);
    this.findPokemonData = this.findPokemonData.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  // Backend GET call to retrieve pokemon information from backend service
  findPokemonData() {
    // Do not query the API with no query data
    if(!this.state.query){
      return;
    }

    // Unset any errors which are being shown
    this.setState({showError: false});

    // First query the local cache to determine if we've searched for this before
    if (this.state.query in this.state.cache) {
      // If we have searched for this before, populate from local cache and return out
      let result = this.state.cache[this.state.query];
      this.props.updatePokemon({
        name: result["name"],
        description: result["description"]
      });
      return
    }

    fetch("/backend/pokemon/"+this.state.query)
      .then(res => res.json())
      .then(
        (result) => {
          // Update the pokemon through the setter passed via props
          this.props.updatePokemon({
            name: result["name"],
            description: result["description"]
          });

          // Update the local cache to avoid quota burn on repeated requests
          let cache = this.state.cache;
          cache[this.state.query] = result;
          this.setState({cache: cache});
        },
      )
      .catch(_ => {
        this.setState({showError: true});
      })
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
          <h1>Shakespearean Pokemon</h1>
          <h3>"Did get to catcheth those folk all"</h3>
        </div>
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
        <div id="error" className={(this.state.showError ? 'show' : 'hidden')}>
          This Pokemon could not be found, please try again
        </div>
      </div>
    );
  }
}

export default Search;