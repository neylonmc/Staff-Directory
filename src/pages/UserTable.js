import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootStrap from "react-bootstrap";

//Creates UserItems Component
class UserItems extends Component {
  //State
  state = {
    users: [],
  };

  //Splits the DOB field coming in and only displays things up to the T(for time).
  getData = (date) => {
    return date.split("T")[0];
  };

  //Calls the randomuser API and displays the data
  async componentDidMount() {
    fetch("https://randomuser.me/api/?results=200")
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        let userData = data.results.map((table) => {
          return (
            //Returns data in the table
            <tr key={table.results}>
              <td>
                <img src={table.picture.medium} alt="" />
              </td>
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

  //Renders the data below
  render() {
    return (
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
