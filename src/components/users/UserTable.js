import React, { Component } from "react";

class UserItems extends Component {
  render() {
    const { name, large, phone, email, dob } = this.props.user;

    return (
      <tr>
        <td>
          <img
            src={large}
            alt=""
            className="round-img"
            style={{ width: "60px " }}
          />
        </td>
        <td>{name}</td>
        <td>{phone}</td>
        <td>{email}</td>
        <td>{dob}</td>
      </tr>
    );
  }
}

export default UserItems;
