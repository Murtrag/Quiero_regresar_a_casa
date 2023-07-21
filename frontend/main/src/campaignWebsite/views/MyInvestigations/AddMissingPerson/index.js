import React from "react";
import string from "strings/myInvestigations";

// react-bootstrap components
import {
//   Badge,
//   Button,
  Card,
//   Navbar,
//   Nav,
  Table,
//   Container,
//   Row,
//   Col,
} from "react-bootstrap";
import MKButton from "publicWebsite/components/MKButton";
import MKBox from "publicWebsite/components/MKBox";

function AddMissingPerson() {
	 return (
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">{string.newInvestigation.title}</Card.Title>
                <p className="card-category">
			{string.newInvestigation.description}
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                  <MKBox mt={4} mb={1}>
                    <MKButton type="submit" variant="gradient" color="dark" fullWidth>
			{string.newInvestigation.startButton}
                    </MKButton>
                  </MKBox>
              </Card.Body>
            </Card>
  );
}

export default AddMissingPerson;
