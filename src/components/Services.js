import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "../styles/Services.css";

export default function Services() {
  return (
    <div className="d-flex flex-row">
      <div className="d-flex justify-content-center m-3">
        <Card style={{ width: "28rem" }}>
          <Card.Header as="h1" className="tier text-center">
            BASIC
          </Card.Header>
          <Card.Body className="service-list">
            <Card.Title>Starting at $300</Card.Title>
            <Card.Text>Includes:</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush service-list">
            <ListGroup.Item>Single landing page</ListGroup.Item>
            <ListGroup.Item>Up to 5 sections</ListGroup.Item>
            <ListGroup.Item>Responsive web design</ListGroup.Item>
            <ListGroup.Item>Social media icons</ListGroup.Item>
            <ListGroup.Item>3 revisions</ListGroup.Item>
            <ListGroup.Item>7-day delivery</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Link to="/book">
              <Button className="tier btn-outline-dark">Book now</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
      <div className="d-flex justify-content-center m-3">
        <Card style={{ width: "28rem" }}>
          <Card.Header as="h1" className="tier text-center">
            STANDARD
          </Card.Header>
          <Card.Body className="service-list">
            <Card.Title>Starting at $500</Card.Title>
            <Card.Text>Includes:</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush service-list">
            <ListGroup.Item>Up to 3 pages</ListGroup.Item>
            <ListGroup.Item>Up to 4 sections per page</ListGroup.Item>
            <ListGroup.Item>Responsive web design</ListGroup.Item>
            <ListGroup.Item>Opt-in form</ListGroup.Item>
            <ListGroup.Item>Social media icons</ListGroup.Item>
            <ListGroup.Item>5 revisions</ListGroup.Item>
            <ListGroup.Item>10-day delivery</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Link to="/book">
              <Button className="tier btn-outline-dark">Book now</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
      <div className="d-flex justify-content-center m-3">
        <Card style={{ width: "28rem" }}>
          <Card.Header as="h1" className="tier text-center">
            PREMIUM
          </Card.Header>
          <Card.Body className="service-list">
            <Card.Title>Starting at $800</Card.Title>
            <Card.Text>Includes:</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush service-list">
            <ListGroup.Item>Up to 5 pages</ListGroup.Item>
            <ListGroup.Item>Up to 6 sections per page</ListGroup.Item>
            <ListGroup.Item>Responsive web design</ListGroup.Item>
            <ListGroup.Item>Opt-in form</ListGroup.Item>
            <ListGroup.Item>Social media icons</ListGroup.Item>
            <ListGroup.Item>Unlimited revisions</ListGroup.Item>
            <ListGroup.Item>14-day delivery</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Link to="/book">
              <Button className="tier btn-outline-dark">Book now</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
