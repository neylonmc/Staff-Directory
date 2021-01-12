import React, { Component } from "react";

// const UserItems = (props) => {
//   const { large, first, email, phone, gender } = props.user;

//   return (
//     <tr>
//       <td>
//         <img
//           src={large}
//           alt=""
//           className="round-img"
//           style={{ width: "60px " }}
//         />
//       </td>
//       <td>{first}</td>
//       <td>{phone}</td>
//       <td>{email}</td>
//       <td>{gender}</td>
//     </tr>
//   );
// };

// export default UserItems;
class UserItems extends Component {
  state = {
    users: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });

    fetch("https://randomuser.me/api/?results=200")
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        let userData = data.results.map((pic) => {
          return (
            <tr key={pic.results}>
              <img src={pic.picture.medium} alt="" />
              <td>{pic.name.first}</td>
              <td>{pic.phone}</td>
              <td>{pic.email}</td>
              <td>{pic.gender}</td>
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
