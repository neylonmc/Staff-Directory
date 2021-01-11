import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import Navbar from "react-bootstrap/Navbar";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

function NavbarTop() {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>Fluid jumbotron</h1>
        <p>
          This is a modified jumbotron that occupies the entire horizontal space
          of its parent.
        </p>
      </Container>
    </Jumbotron>
  );
}
export default NavbarTop;
