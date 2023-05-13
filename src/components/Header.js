import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/Header.css";

export default function Header() {
  return (
    <header className="p-2">
      <Navbar variant="light" expand="md">
        <Navbar.Brand>
          <img
            src="../images/logo-576.png"
            alt=""
            className="logo-576"
          />
          <img
            src="../images/logo-768.png"
            alt=""
            className="logo-768"
          />
          <img
            src="../images/logo-992.png"
            alt=""
            className="logo-992"
          />
          <img
            src="../images/logo-1200.png"
            alt=""
            className="logo-1200"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="background">
            <Nav.Item>
              <Nav.Link>
                <Link to="/" style={{ textDecoration: "none" }}>
                  Home
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link to="/about" style={{ textDecoration: "none" }}>
                  About
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link to="/work" style={{ textDecoration: "none" }}>
                  My Work
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link to="/services" style={{ textDecoration: "none" }}>
                  Services
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link to="/book" style={{ textDecoration: "none" }}>
                  Book
                </Link>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
