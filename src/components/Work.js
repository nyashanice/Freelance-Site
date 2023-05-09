import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../styles/Work.css";

export default function Work() {
  return (
    <div>
      <h1 className="text-center p-2 work-title">Example Work</h1>
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
              <Card.Text className="card-text">
                This website showcases the information on a hairstylist and is
                designed to have a place for products and booking information.
              </Card.Text>
              <Card.Text className="card-text">
                Created with: ReactJS, CSS, Bootstrap
              </Card.Text>
              <Button variant="outline-dark" className="card-btn">
                Visit site
              </Button>
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
              <Card.Text className="card-text">
                This website hosts information for a youth football camp with
                details such as instructors, frequently asked questions, and
                event description.
              </Card.Text>
              <Card.Text className="card-text">
                Created with: ReactJS, CSS, Bootstrap
              </Card.Text>
              <Button variant="outline-dark" className="card-btn">
                Visit site
              </Button>
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
              <Card.Text className="card-text">
                This website gives details on a fitness event and allows you to
                view location information, sponsors, and ticket pricing.
              </Card.Text>
              <Card.Text className="card-text">
                Created with: ReactJS, CSS, Bootstrap
              </Card.Text>
              <Button variant="outline-dark" className="card-btn">
                Visit site
              </Button>
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
              <Card.Text className="card-text">
                This website is a landing page for a travel agency. The website
                showcases testimonials from past clients, packages offered by
                the company, and images.
              </Card.Text>
              <Card.Text className="card-text">
                Created with: ReactJS, CSS, Bootstrap
              </Card.Text>
              <Button variant="outline-dark" className="card-btn">
                Visit site
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
