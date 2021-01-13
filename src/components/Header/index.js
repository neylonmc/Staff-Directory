import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import logo from "./images/12.png";

function Header() {
  return (
    <Jumbotron fluid className="jumbo">
      <img src={logo} alt="logo" />
    </Jumbotron>
  );
}
export default Header;
