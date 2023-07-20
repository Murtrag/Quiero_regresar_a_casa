import React from "react";
import MissingPersonCard from "./MissingPersonCard";
import MissingPeople from "./MissingPeople";
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
		 <MissingPeople data={[
			 {name: "Ashley", description: "Random Face", image:"https://scontent-ams4-1.xx.fbcdn.net/v/t1.18169-9/27072953_1973703225992145_3261305098483892783_n.jpg?_nc_cat=103&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=SgjfZtMG_ogAX_KKK1T&_nc_ht=scontent-ams4-1.xx&oh=00_AfDKjwjAG5OmF_Nq6fEnDZcm7lLDtopjtmF_Iee4hQ1H9A&oe=64E0C61A"},
			 {name: "Ashley", description: "Random Face", image:"https://scontent-ams4-1.xx.fbcdn.net/v/t1.18169-9/27072953_1973703225992145_3261305098483892783_n.jpg?_nc_cat=103&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=SgjfZtMG_ogAX_KKK1T&_nc_ht=scontent-ams4-1.xx&oh=00_AfDKjwjAG5OmF_Nq6fEnDZcm7lLDtopjtmF_Iee4hQ1H9A&oe=64E0C61A"},
		 ]}/>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MyInvestigations;
