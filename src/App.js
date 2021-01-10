import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarTop from "./components/layout/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarTop
          title="Initech Staff Directory"
          icon="fas fa-broadcast-tower"
        />
      </div>
    );
  }
}

export default App;
