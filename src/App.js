import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Users />
      </div>
    );
  }
}

export default App;
