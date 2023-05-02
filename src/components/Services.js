import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Services() {
  return (
    <div className="d-flex flex-column">
      <div className="d-flex justify-content-center m-3">
        <Card style={{ width: "28rem" }}>
          <Card.Header as="h1" className="tier text-center">
            Premium
          </Card.Header>
          <Card.Body>
            <Card.Title>Starting at $800</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Book now</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="d-flex justify-content-center m-3">
        <Card style={{ width: "28rem" }}>
          <Card.Header as="h1" className="tier text-center">
            Standard
          </Card.Header>
          <Card.Body>
            <Card.Title>Starting at $500</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Book now</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="d-flex justify-content-center m-3">
        <Card style={{ width: "28rem" }}>
          <Card.Header as="h1" className="tier text-center">
            Basic
          </Card.Header>
          <Card.Body>
            <Card.Title>Starting at $300</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Book now</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
