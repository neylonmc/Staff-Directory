import React, { Component } from "react";

class Search extends Component {
  state = {
    text: "",
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form className="form">
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
