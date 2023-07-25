import React from "react";
import string from "strings/myInvestigations";

import choices from "strings/choices";
import Select from "utils/Options";

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
			<Card.Title as="h4">Informacje podstawowe o zaginionej osobie</Card.Title>
			<p className="card-category">
			Podstawowe kryteria niezmienne dotyczące zaginionej osoby	
			</p>
                      <Form.Group>
                        <label>Hair colour</label>
                        <Form.Control
                          value=""
                          placeholder="Blonde"
			  onChange={e=>console.log(e.target.value)}
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group>
                        <label>Hair length</label>
                        <Form.Control
                          value=""
                          placeholder="Long"
			  onChange={e=>console.log(e.target.value)}
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group>
                        <label>Eye color</label>
                        <Form.Control
                          value=""
                          placeholder="blue"
			  onChange={e=>console.log(e.target.value)}
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group>
                        <label>distinguishing marks</label>
                        <Form.Control
                          value=""
                          placeholder="tatoo"
			  onChange={e=>console.log(e.target.value)}
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group>
                        <label>Description</label>
                        <Form.Control
                          value=""
                          placeholder="Here you can write a description about the person"
			  onChange={e=>console.log(e.target.value)}
                          type="text"
                        ></Form.Control>
                      </Form.Group>
		</Card.Header>
)
