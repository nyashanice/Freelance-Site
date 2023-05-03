import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <div className="footer-background p-2">
      <div className="footer-text text-center">Let's stay connected!</div>
      <div className="d-flex flex-row justify-content-center">
        <Link to="https://www.instagram.com/codenamenyat/">
          <img
            src="../images/insta.png"
            alt="Instagram logo"
            className="logo m-2"
          />
        </Link>
        <Link to="https://www.linkedin.com/in/nyatyus/">
          <img
            src="../images/linkedin.png"
            alt="LinkedIn logo"
            className="logo m-2"
          />
        </Link>
        <Link to="https://github.com/nyashanice">
          <img
            src="../images/github.png"
            alt="Github logo"
            className="logo m-2"
          />
        </Link>
        <Link to="mailto:nyastyus@gmail.com">
          <img
            src="../images/email.png"
            alt="envelope icon"
            className="email"
          />
        </Link>
      </div>
    </div>
  );
}
