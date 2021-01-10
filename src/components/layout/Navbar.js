import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";

function NavbarTop() {
  return (
    <Navbar bg="dark" variant="dark" style={{ textAlign: "center" }}>
      <Navbar.Brand>
        <h1 className="navbar">Initech Staff Directory</h1>
      </Navbar.Brand>
    </Navbar>
  );
}
export default NavbarTop;
