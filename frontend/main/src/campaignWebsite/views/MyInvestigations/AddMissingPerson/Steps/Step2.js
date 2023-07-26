import React from "react";
import string from "strings/myInvestigations";

import choices from "strings/choices";
import DataSelect from "components/DataSelect/DataSelect";

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
                        <DataSelect
                          value={formData.hairColor}
			  name="hairColor"
			  onChange={e=>setField(e)}
                          type="select"
			  data={choices.hair.color}
                        />
                      </Form.Group>
                      <Form.Group>
                        <label>Hair length</label>
                        <DataSelect
                          value={formData.length}
			  name="hairLength"
			  onChange={e=>setField(e)}
                          type="select"
			  data={choices.hair.length}
                        />
                      </Form.Group>
                      <Form.Group>
                        <label>Eye color</label>
                        <DataSelect
                          value={formData.length}
			  name="eyeColor"
			  onChange={e=>setField(e)}
                          type="select"
			  data={choices.eye}
                        />
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
