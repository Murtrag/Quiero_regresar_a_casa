import React from "react";
import string from "strings/myInvestigations";
import { nlToBr } from "utils/parse"
import missingBoyImage from "assets/images/missing_boy.png";
import {
//   Badge,
//   Button,
  Card,
//   Navbar,
//   Nav,
// Table,
//   Container,
  Row,
  Col,
} from "react-bootstrap";

export default ()=>(
		<Card.Header>
			<Card.Title as="h4">{string.newInvestigation.beginning.title}</Card.Title>
	<Row>
	<Col>
			<p className="card-category">
			{nlToBr(string.newInvestigation.beginning.description)}
			</p>
	</Col>
	<Col>
			<img src={missingBoyImage} width="650px" />
	</Col>
	</Row>
		</Card.Header>
)
