import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Work() {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      <div className="d-flex flex-row">
        <Card style={{ width: "28rem" }} className="m-3">
          <Card.Img
            variant="top"
            style={{ width: "28rem", height: "19rem" }}
            src="../images/flower.jpg"
          />
          <Card.Body>
            <Card.Title>Beauty Brand</Card.Title>
            <Card.Text>ReactJS, CSS, Bootstrap</Card.Text>
            <Button variant="primary">Visit site</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "28rem" }} className="m-3">
          <Card.Img
            variant="top"
            style={{ width: "28rem", height: "19rem" }}
            src="../images/football.jpg"
          />
          <Card.Body>
            <Card.Title>Youth Football Camp</Card.Title>
            <Card.Text>ReactJS, CSS, Bootstrap</Card.Text>
            <Button variant="primary">Visit site</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="d-flex flex-row">
        <Card style={{ width: "28rem" }} className="m-3">
          <Card.Img
            variant="top"
            style={{ width: "28rem", height: "19rem" }}
            src="../images/weight.jpg"
          />
          <Card.Body>
            <Card.Title>Fitness Event</Card.Title>
            <Card.Text>ReactJS, CSS, Bootstrap</Card.Text>
            <Button variant="primary">Visit site</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "28rem" }} className="m-3">
          <Card.Img
            variant="top"
            style={{ width: "28rem", height: "19rem" }}
            src="../images/plane.jpg"
          />
          <Card.Body>
            <Card.Title>Travel Agent</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Visit site</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
