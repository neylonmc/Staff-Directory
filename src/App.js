import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}

export default App;
