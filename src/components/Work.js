import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../styles/Work.css";

export default function Work() {
  return (
    <div>
      <h1 className="text-center p-2 work-title">EXAMPLE WORK</h1>
      <div className="d-flex flex-wrap justify-content-center">
        <div className="row d-flex flex-row">
          <Card className="work-card m-1 m-md-3">
            <Card.Img
              variant="top"
              src="../images/flower.jpg"
              className="card-img"
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
              <Link
                to="https://nyashanice.github.io/Beauty-Brand/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-dark" className="card-btn">
                  Visit site
                </Button>
              </Link>
            </Card.Body>
          </Card>
          <Card className="work-card m-1 m-md-3">
            <Card.Img
              variant="top"
              src="../images/football.jpg"
              className="card-img"
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
              <Link
                to="https://nyashanice.github.io/Youth-Football-Camp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-dark" className="card-btn">
                  Visit site
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
        <div className="row d-flex flex-row">
          <Card className="work-card m-1 m-md-3">
            <Card.Img
              variant="top"
              src="../images/weight.jpg"
              className="card-img"
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
              <Link
                to="https://nyashanice.github.io/Fast-Twitch-Frenzy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-dark" className="card-btn">
                  Visit site
                </Button>
              </Link>
            </Card.Body>
          </Card>
          <Card className="work-card m-0 m-md-3">
            <Card.Img
              variant="top"
              src="../images/plane.jpg"
              className="card-img"
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
              <Link
                to="https://nyashanice.github.io/Travel-Agent-Site/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-dark" className="card-btn">
                  Visit site
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
