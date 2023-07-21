import React from "react";
import { Card, Col } from "react-bootstrap";
import { nlToBr } from "utils/parse";
import "./style.css";

const MissingPersonCard = ({ fullName, callingName, description, image }) => {
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
	  <h5 className="title">{fullName}</h5>
	  <p className="description">{callingName}</p>
	<p className="description text-center">
	  {nlToBr(description)}
	</p>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MissingPersonCard;

