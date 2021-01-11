import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <form className="form">
        <input type="text" name="text" placeholder="Search users.." />
        <input type="submit" value="Search" className="btn btn-primary" />
      </form>
    );
  }
}

export default Search;
