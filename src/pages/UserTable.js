import React, { Component } from "react";

class UserItems extends Component {
  state = {
    users: [],
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
              <td>{table.dob.age}</td>
            </tr>
          );
        });
        this.setState({ userData: userData });
      });
  }

  render() {
    return <div>{this.state.userData}</div>;
  }
}

export default UserItems;

//{ user: { large, first, phone, email, age } }
