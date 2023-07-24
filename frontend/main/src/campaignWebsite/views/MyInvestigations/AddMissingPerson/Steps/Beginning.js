import React from "react";
import string from "strings/myInvestigations";
import {
//   Badge,
//   Button,
  Card,
//   Navbar,
//   Nav,
// Table,
//   Container,
//   Row,
//   Col,
} from "react-bootstrap";

export default ()=>(
		<Card.Header>
			<Card.Title as="h4">{string.newInvestigation.title}</Card.Title>
			<p className="card-category">
			{string.newInvestigation.description}Aleluja
			</p>
		</Card.Header>
)
