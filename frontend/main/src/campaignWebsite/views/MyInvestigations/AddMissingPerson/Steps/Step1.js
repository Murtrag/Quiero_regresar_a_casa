import React from "react";
import string from "strings/myInvestigations";
import Choices from "strings/choices";
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
                        <label>Calling Name</label>
                        <Form.Control
                          value={formData.callingName}
			  onChange={e=>setField(e)}
			  name="callingName"
                          placeholder="The way people are casually call the person"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group>
                        <label>Full Name</label>
                        <Form.Control
                          value={formData.fullName}
			  onChange={e=>setField(e)}
			  name="fullName"
                          placeholder="Fu"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group>
                        <label>Year of birth</label>
                        <Form.Control
                          value={formData.yearOfBirth}
			  onChange={e=>setField(e)}
			  name="yearOfBirth"
                          placeholder="1990"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group>
                        <label>Length</label>
                        <Form.Control
                          value={formData.length}
			  onChange={e=>setField(e)}
			  name="length"
                          placeholder="170"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group>
                        <label>Sex</label>

                        <Form.Select
                          value={formData.sex}
			  name="sex"
			  onChange={e=>setField(e)}
                          type="select"
                        >
				 <Choices.Sex />

			</Form.Select>
                      </Form.Group>
                      <Form.Group>
                        <label>Origin</label>
                        <Form.Select
                          value={formData.origin}
			  name="origin"
			  onChange={e=>setField(e)}
                          type="select"
                        >
				<Choices.Country />

			</Form.Select>
                      </Form.Group>
		</Card.Header>
)
