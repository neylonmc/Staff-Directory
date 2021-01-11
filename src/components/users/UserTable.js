import React from "react";
import PropTypes from "prop-types";

const UserItems = ({ user: { first, large, phone, email, age } }) => {
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
      <td>{age}</td>
    </tr>
  );
};

UserItems.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItems;
