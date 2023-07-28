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
			<Card.Title as="h4">{string.newInvestigation.step1.title}</Card.Title>
			<p className="card-category">
			{string.newInvestigation.step1.description}
			</p>
                      <Form.Group>
                        <label>{string.newInvestigation.step1.fields.hairColor}</label>
                        <DataSelect
                          value={formData.hairColor}
			  name="hairColor"
			  onChange={e=>setField(e)}
                          type="select"
			  data={choices.hair.color}
                        />
                      </Form.Group>
                      <Form.Group>
                        <label>{string.newInvestigation.step1.fields.hairLength}</label>
                        <DataSelect
                          value={formData.length}
			  name="hairLength"
			  onChange={e=>setField(e)}
                          type="select"
			  data={choices.hair.length}
                        />
                      </Form.Group>
                      <Form.Group>
                        <label>{string.newInvestigation.step1.fields.eyeColor}</label>
                        <DataSelect
                          value={formData.length}
			  name="eyeColor"
			  onChange={e=>setField(e)}
                          type="select"
			  data={choices.eye}
                        />
                      </Form.Group>
                      <Form.Group>
                        <label>{string.newInvestigation.step1.fields.distinguishingMarks}</label>
                        <Form.Control
                          value={formData.distinguishingMarks}
                          placeholder="tatoo"
			  name="distinguishingMarks"
			  onChange={e=>setField(e)}
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group>
                        <label>Description</label>
                        <Form.Control
                          value={formData.description}
                          name="description"
                          placeholder="Here you can write a description about the person"
			  onChange={e=>setField(e)}
                          type="text"
                        ></Form.Control>
                      </Form.Group>
		</Card.Header>
)
