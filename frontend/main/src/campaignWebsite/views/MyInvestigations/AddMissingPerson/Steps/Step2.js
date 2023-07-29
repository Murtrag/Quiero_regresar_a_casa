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
			<Card.Title as="h4">{string.newInvestigation.step2.title}</Card.Title>
			<p className="card-category">
			{string.newInvestigation.step2.description}
			</p>
                      <Form.Group>
                        <label>{string.newInvestigation.step2.fields.labels.hairColor}</label>
                        <DataSelect
                          value={formData.hairColor}
			  name="hairColor"
			  onChange={e=>setField(e)}
                          type="select"
			  data={choices.hair.color}
                        />
                      </Form.Group>
                      <Form.Group>
                        <label>{string.newInvestigation.step2.fields.labels.hairLength}</label>
                        <DataSelect
                          value={formData.length}
			  name="hairLength"
			  onChange={e=>setField(e)}
                          type="select"
			  data={choices.hair.length}
                        />
                      </Form.Group>
                      <Form.Group>
                        <label>{string.newInvestigation.step2.fields.labels.eyeColor}</label>
                        <DataSelect
                          value={formData.length}
			  name="eyeColor"
			  onChange={e=>setField(e)}
                          type="select"
			  data={choices.eye}
                        />
                      </Form.Group>
                      <Form.Group>
                        <label>{string.newInvestigation.step2.fields.labels.distinguishingMarks}</label>
                        <Form.Control
                          value={formData.distinguishingMarks}
                          placeholder={string.newInvestigation.step2.fields.placeholders.distinguishingMarks}
			  name="distinguishingMarks"
			  onChange={e=>setField(e)}
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group>
                        <label>{string.newInvestigation.step2.fields.labels.description}</label>
                        <Form.Control
                          value={formData.description}
                          cols="80"
                          name="description"
			  style={{minHeight: "62px"}}
                          placeholder={string.newInvestigation.step2.fields.placeholders.description}
			  onChange={e=>setField(e)}
                          rows="4"
                          as="textarea"
                        ></Form.Control>
                      </Form.Group>
		</Card.Header>
)
