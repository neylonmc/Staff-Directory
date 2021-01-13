import React, { Component } from "react";

class Search extends Component {
  //Creates state object
  state = {
    text: "",
  };

  //Allows text to be input in the field
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  //When the submit button is hit, changes the state
  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: "" });
  };

  //Renders data below
  render() {
    return (
      <form onSubmit={this.onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search users.."
          value={this.state.text}
          onChange={this.onChange}
        />
        <input type="submit" value="Search" className="btn btn-primary" />
      </form>
    );
  }
}

export default Search;
