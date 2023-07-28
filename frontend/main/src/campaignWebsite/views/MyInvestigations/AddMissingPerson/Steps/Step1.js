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

export default ({setField, formData})=>{
		console.log(setField)
		return <Card.Header>
			<Card.Title as="h4">{string.newInvestigation.step1.title}</Card.Title>
			<p className="card-category">
			{string.newInvestigation.step1.description}
			</p>
                      <Form.Group>
                        <label>{string.newInvestigation.step1.fields.callingName}</label>
                        <Form.Control
                          value={formData.callingName}
			  onChange={e=>setField(e)}
			  name="callingName"
                          placeholder="The way people are casually call the person"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group>
                        <label>{string.newInvestigation.step1.fields.fullName}</label>
                        <Form.Control
                          value={formData.fullName}
			  onChange={e=>setField(e)}
			  name="fullName"
                          placeholder="Fu"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group>
                        <label>{string.newInvestigation.step1.fields.yearOfBirth}</label>
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
                        <label>{string.newInvestigation.step1.fields.yearOfBirth}</label>
                        <DataSelect
                          value={formData.sex}
			  name="sex"
			  onChange={e=>setField(e)}
                          type="select"
			  data={choices.sex}
                        />

                      </Form.Group>
                      <Form.Group>
                        <label>{string.newInvestigation.step1.fields.origin}</label>
                        <DataSelect
                          value={formData.origin}
			  name="origin"
			  onChange={e=>setField(e)}
                          type="select"
			  data={choices.country}
                        />
                      </Form.Group>
		</Card.Header>
}
