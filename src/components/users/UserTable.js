import React from "react";

const UserItems = (props) => {
  const { name, large, phone, email, dob } = props.user;
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
