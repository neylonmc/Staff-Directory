import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/index";
import UserItems from "./pages/UserTable";
import Search from "./pages/Search";
import Navbar from "./components/Navbar/index";

class App extends Component {
  //Search Users
  searchUsers = async (text) => {
    console.log(text);
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <div className="container">
          <Search searchUsers={this.searchUsers} />
          <UserItems />
        </div>
      </div>
    );
  }
}

export default App;
