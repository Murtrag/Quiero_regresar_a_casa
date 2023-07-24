import React from 'react';
import string from "strings/myInvestigations";

import {
//   Badge,
//   Button,
  Card,
//   Navbar,
//   Nav,
  Table,
//   Container,
  Row,
  Col
} from "react-bootstrap";
import MKButton from "publicWebsite/components/MKButton";
import MKBox from "publicWebsite/components/MKBox";
import ProgressBar from "react-bootstrap/ProgressBar";
import StepRender from "./Steps/index";


function AddMissingPerson({step, totalSteps, setStep}) {
	return (
	  <Card className="strpied-tabled-with-hover">
	    <StepRender step={step} />
	    <Card.Body className="table-full-width table-responsive px-0">
	      <MKBox mt={4} mb={1}>
		<Row>
		  <Col xs={12}>
		    <ProgressBar variant="dark" animated now={step / totalSteps * 100} />
		  </Col>
		</Row>
		<Row className="my-2">
		  {step > 0 &&
		    <Col>
		      <MKButton
			type="submit"
			variant="gradient"
			color="light"
			onClick={el => setStep(step - 1)}
			fullWidth
		      >
			  <i className="nc-icon nc-stre-left" />
			{string.newInvestigation.goBackButton}
		      </MKButton>
		    </Col>
		  }
		  <Col>
		    <MKButton
		      type="submit"
		      variant="gradient"
		      color="dark"
		      onClick={el => setStep(step + 1)}
		      fullWidth
		    >
		      {(step === 0) ? string.newInvestigation.startButton : "Continue"}
			&nbsp;
			{(step === 0) ?  <i className="nc-icon nc-zoom-split" />:<i className="nc-icon nc-stre-right" />}
		    </MKButton>
		  </Col>
		</Row>
	      </MKBox>
	    </Card.Body>
	  </Card>
	);
}

export default AddMissingPerson;
