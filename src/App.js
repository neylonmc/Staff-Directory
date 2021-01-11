import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import axios from "axios";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });

    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          users: response.results,
          loading: true,
        });
      });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
