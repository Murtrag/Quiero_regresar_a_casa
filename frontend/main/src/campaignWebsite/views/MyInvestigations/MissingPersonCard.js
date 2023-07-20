import React from "react";
import { Card, Col } from "react-bootstrap";
import "./style.css";

const MissingPersonCard = ({ name, description, image }) => {
  return (
    <Col xs={2} sm={2} md={2} lg={2}>
      <Card>
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
    </Col>
  );
};

export default MissingPersonCard;
