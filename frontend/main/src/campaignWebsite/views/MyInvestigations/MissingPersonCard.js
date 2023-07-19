import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import "./style.css";

const MissingPersonCard = ({ name, description, image }) => {
  return (
        <Card xs={3}>
          <Card.Img
            variant="top"
            src={image}
            alt="Person"
            className="missing-person-img"
          />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </Card>
  );
};

export default MissingPersonCard;
