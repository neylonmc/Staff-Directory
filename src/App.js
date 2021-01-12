import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/layout/Navbar";
import UserItems from "./components/users/UserTable";
import Search from "./components/users/Search";

class App extends Component {
  //Search Users
  searchUsers = async (text) => {
    console.log(text);
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search searchUsers={this.searchUsers} />
          <UserItems />
        </div>
      </div>
    );
  }
}

export default App;
