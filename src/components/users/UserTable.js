import React from "react";

const UserItems = (props) => {
  const { large, first, email, phone, gender } = props.user;

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
      <td>{first}</td>
      <td>{phone}</td>
      <td>{email}</td>
      <td>{gender}</td>
    </tr>
  );
};

export default UserItems;

//{ user: { large, first, phone, email, age } }
