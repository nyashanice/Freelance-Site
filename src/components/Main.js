import React from "react";
import { Link } from "react-router-dom";
import "../styles/Main.css";
import Benefits from "./Benefits";
import { Button } from "react-bootstrap";

export default function Main() {
  return (
    <div>
      <div className="main p-5">
        <div className="title text-center">Hey! My name is Nya Shanice.</div>
        <div className="subtitle text-center">
          web developer (web di-'ve-lə-pər) : creating websites for service
          based businesses and brands
        </div>
      </div>
      <Benefits />
      <div className="d-flex justify-content-center">
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
      </div>
    </div>
  );
}
