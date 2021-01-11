import React from "react";
import PropTypes from "prop-types";

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

UserItems.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItems;
