import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/";
import UserItems from "./pages/UserTable";
import Search from "./pages/Search";
import Navbar from "./components/Navbar/";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <div className="container">
          <Search searchUsers={this.searchUsers} />
          <UserItems userState={this.userState} />
        </div>
      </div>
    );
  }
}

export default App;
