import React, { Component } from "react";

class Search extends Component {
  //Creates state object
  state = {
    text: "",
  };

  //Allows text to be input in the field to change the state
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  //Passes props up the App.js and then clears the form after it is submitted
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
