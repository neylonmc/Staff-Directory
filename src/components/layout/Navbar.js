import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import Navbar from "react-bootstrap/Navbar";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

function NavbarTop() {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>IniTech Staff Directory</h1>
        <p>Staff Directory of Initech. Find all employees below.</p>
      </Container>
    </Jumbotron>
  );
}
export default NavbarTop;
