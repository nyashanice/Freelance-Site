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
      <div className="d-flex justify-content-center pb-5">
        <Link to="/work">
          <Button className="btn-outline-dark btn-lg cta-btn">
            Check out my work!
          </Button>
        </Link>
      </div>
    </div>
  );
}
