import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function BasicExample(props) {
  return (
    <div>
      <Navbar
        expand="lg"
        className={` bg-${props.mode}  navbar-${props.mode} `}
      >
        <Container style={{ display: "flex", justifyContent: "flex-end" }}>
          <Navbar.Brand href="/">{props.title}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/About">{props.aboutText}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className=" form-check-input "
              onClick={props.toggleMode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label "
              htmlFor="flexSwitchCheckDefault"
            >
              Enable DarkMode
            </label>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default BasicExample;
