import React, { Component } from "react";

class Search extends Component {
  //Creates state object
  state = {
    search: "",
  };

  //Allows text to be input in the field to change the state
  updateSearch(event) {
    this.setState({ search: event.target.value });
  }

  //Renders data below
  render() {
    return (
      <form onSubmit={this.onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search users.."
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
        />
      </form>
    );
  }
}

export default Search;
