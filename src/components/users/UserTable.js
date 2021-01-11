import React from "react";

const UserItems = ({ user: { name, large, phone, email, dob } }) => {
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
};

export default UserItems;
