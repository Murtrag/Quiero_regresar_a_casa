import React from "react";
import MissingPeople from "./MissingPeopleList/index";
import AddMissingPerson from "./AddMissingPerson/index";
import {useState} from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function MyInvestigations() {
  const [startNewInvestigationStep, setStartNewInvestigationStep] = useState(0);
  const totalSteps = 4;

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
		  <AddMissingPerson step={startNewInvestigationStep} totalSteps={totalSteps} setStep={setStartNewInvestigationStep} />
          </Col>
          <Col md="12">
		  {
			  startNewInvestigationStep===0 &&
			  <MissingPeople />
		  }
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MyInvestigations;
