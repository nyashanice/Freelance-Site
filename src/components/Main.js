import React from "react";
import { Link } from "react-router-dom";
import "../styles/Main.css";
import Banner from "./Banner";
import Benefits from "./Benefits";
import { Button } from "react-bootstrap";

export default function Main() {
  return (
    <div>
      <Banner />
      <Benefits />
      {/* <div className="d-flex justify-content-center">
        <Link to="/work">
          <Button className="tier btn-outline-dark btn-lg portfolio-button">
            Check out my work!
          </Button>
        </Link>
      </div>
      <div className="d-flex justify-content-center p-3">
        <Link to="https://qn1aqkbnq05.typeform.com/to/avcH5PZM">
          <Button className="tier btn-outline-dark btn-lg">Book now</Button>
        </Link>
      </div> */}
    </div>
  );
}
