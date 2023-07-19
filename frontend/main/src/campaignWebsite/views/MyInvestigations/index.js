import React from "react";
import MissingPersonCard from "./MissingPersonCard";
import string from "strings/myInvestigations";

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
	 return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Striped Table with Hover</Card.Title>
                <p className="card-category">
                  Here is a subtitle for this table
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Salary</th>
                      <th className="border-0">Country</th>
                      <th className="border-0">City</th>
                    </tr>
                  </thead>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">{string.currentInvestigations.title}</Card.Title>
                <p className="card-category">{string.currentInvestigations.description}</p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
		 <MissingPersonCard name="Ashley" description="Random Face" image="https://www.fbi.gov/wanted/kidnap/ashley-summers/summersaged2023.jpg"  />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MyInvestigations;
