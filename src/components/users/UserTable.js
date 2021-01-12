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
        let userData = data.results.map((pic) => {
          return (
            <tr key={pic.results}>
              <img src={pic.picture.medium} alt="" />
              <td>
                {pic.name.first} {pic.name.last}
              </td>
              <td>{pic.phone}</td>
              <td>{pic.email}</td>
              <td>{pic.dob.age}</td>
            </tr>
          );
        });
        this.setState({ userData: userData });
        console.log("state", this.state.userData);
      });
  }

  render() {
    return <div>{this.state.userData}</div>;
  }
}

export default UserItems;

//{ user: { large, first, phone, email, age } }
