import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootStrap from "react-bootstrap";

class UserItems extends Component {
  state = {
    users: [],
  };

  getData = (date) => {
    return date.split("T")[0];
  };

  async componentDidMount() {
    fetch("https://randomuser.me/api/?results=200")
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        let userData = data.results.map((table) => {
          return (
            <tr key={table.results}>
              <img src={table.picture.medium} alt="" />
              <td>
                {table.name.first} {table.name.last}
              </td>
              <td>{table.phone}</td>
              <td>{table.email}</td>
              <td>{this.getData(table.dob.date)}</td>
            </tr>
          );
        });
        this.setState({ userData: userData });
      });
  }

  render() {
    return (
      //<div>{this.state.userData}</div>;
      <ReactBootStrap.Table striped bordered hover>
        <thead>
          <tr>
            <th>Photo</th>
            <th>Full Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>DOB</th>
          </tr>
        </thead>
        <tbody>{this.state.userData}</tbody>
      </ReactBootStrap.Table>
    );
  }
}

export default UserItems;
