import React, { Component } from "react";
import UserItems from "./UserTable";

class Users extends Component {
  render() {
    return (
      <div>
        {this.props.users.map((user) => (
          <UserItems key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

export default Users;
