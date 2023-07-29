import React from "react";
import string from "strings/myInvestigations";
import {
	//   Badge,
	//   Button,
	Card,
	//   Navbar,
	//   Nav,
	Form,
	// Table,
	//   Container,
	//   Row,
	//   Col,
} from "react-bootstrap";

export default ({setField, formData})=>(

		<Card.Header>
			<Card.Title as="h4">{string.newInvestigation.step3.title}</Card.Title>
			<p className="card-category">
			{string.newInvestigation.step3.description}
			</p>
		      <Form.Group controlId="formFileLg" className="mb-3">
			<Form.Label>{string.newInvestigation.step3.fields.labels.image}</Form.Label>
			<Form.Control type="file" size="lg" />
                      </Form.Group>
		</Card.Header>
)
