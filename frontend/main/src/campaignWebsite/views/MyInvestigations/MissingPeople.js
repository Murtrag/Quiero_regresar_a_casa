import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import "./style.css";

const MissingPersonCard = ({missingPeople}) => {
  return (
    <Container fluid>
	  {
		  missingPeople.map((name, description, image)=>(
			<MissingPersonCard name=name description=description image=image />	
		  ))
	  }

    </Container>
  );
};

export default MissingPersonCard;
