import React, { Component } from "react";
import UserItems from "./UserTable";

export class Users extends Component {
  state = {
    users: [
      {
        id: "id",
        name: "Mary",
        large: "https://randomuser.me/api/portraits/women/70.jpg",
        phone: "5407354680",
        email: "fdsjk@gmail.com",
        dob: "",
      },
      {
        id: "id",
        name: "fds",
        large: "https://randomuser.me/api/portraits/women/70.jpg",
        phone: "5407354680",
        email: "fdsjk@gmail.com",
        dob: "",
      },
      {
        id: "id",
        name: "Mary",
        large: "https://randomuser.me/api/portraits/women/70.jpg",
        phone: "5407354680",
        email: "fdsjk@gmail.com",
        dob: "",
      },
    ],
  };

  render() {
    return (
      <div>
        {this.state.users.map((user) => (
          <UserItems key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

export default Users;
