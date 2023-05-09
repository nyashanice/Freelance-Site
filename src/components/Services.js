import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/Services.css";

export default function Services() {
  return (
    <Container className="text-center">
      <Row className="mb-5">
        <Col>
          <Card style={{ height: "65vh" }}>
            <Card.Header as="h1" className="tier">
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
                <Button className="services-btn btn-outline-dark">
                  Book now
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ height: "65vh" }}>
            <Card.Header as="h1" className="tier">
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
                <Button className="services-btn btn-outline-dark">
                  Book now
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ height: "65vh" }}>
            <Card.Header as="h1" className="tier">
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
                <Button className="services-btn btn-outline-dark">
                  Book now
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
