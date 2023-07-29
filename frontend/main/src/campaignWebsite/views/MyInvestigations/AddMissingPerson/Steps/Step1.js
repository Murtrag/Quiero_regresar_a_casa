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
                        <label>{string.newInvestigation.step1.fields.labels.callingName}</label>
                        <Form.Control
                          value={formData.callingName}
			  onChange={e=>setField(e)}
			  name="callingName"
                          placeholder={string.newInvestigation.step1.fields.placeholders.callingName}
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group>
                        <label>{string.newInvestigation.step1.fields.labels.fullName}</label>
                        <Form.Control
                          value={formData.fullName}
			  onChange={e=>setField(e)}
			  name="fullName"
                          placeholder={string.newInvestigation.step1.fields.placeholders.fullName}
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group>
                        <label>{string.newInvestigation.step1.fields.labels.yearOfBirth}</label>
                        <Form.Control
                          value={formData.yearOfBirth}
			  onChange={e=>setField(e)}
			  name="yearOfBirth"
                          placeholder={string.newInvestigation.step1.fields.placeholders.yearOfBirth}
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group>
                        <label>{string.newInvestigation.step1.fields.labels.length}</label>
                        <Form.Control
                          value={formData.length}
			  onChange={e=>setField(e)}
			  name="length"
                          placeholder={string.newInvestigation.step1.fields.placeholders.length}
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group>
                        <label>{string.newInvestigation.step1.fields.labels.sex}</label>
                        <DataSelect
                          value={formData.sex}
			  name="sex"
			  onChange={e=>setField(e)}
                          type="select"
			  data={choices.sex}
                        />

                      </Form.Group>
                      <Form.Group>
                        <label>{string.newInvestigation.step1.fields.labels.origin}</label>
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
