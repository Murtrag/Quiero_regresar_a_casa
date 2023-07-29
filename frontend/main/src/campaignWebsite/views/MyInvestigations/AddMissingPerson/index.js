import React, {useEffect, useState} from "react";
import string from "strings/myInvestigations";
import SweetAlert2 from "react-sweetalert2";
import Swal from "sweetalert2";
import { 
	f_loginURL,
	b_AddMissingPersonURL 
} from "urls";

import {
//   Badge,
//   Button,
  Card,
//   Navbar,
//   Nav,
  Table,
//   Container,
  Row,
  Col
} from "react-bootstrap";
import MKButton from "publicWebsite/components/MKButton";
import MKBox from "publicWebsite/components/MKBox";
import ProgressBar from "react-bootstrap/ProgressBar";
import StepRender from "./Steps/index";


function AddMissingPerson({step, totalSteps, setStep}) {
	let [formData, setFormData] = useState({
		// origin: "mx",
		// callingName: "Luna",
		// fullName: "Luna",
		// yearOfBirth: "1993",
		// length: "167",
		// hairColor: "0",
		// hairLength: "0",
		// eyeColor: "0",
		// sex: "m",
		// distinguishingMarks: "none",
		// description: "funny",
	});

	
	const setField = el => {
		setFormData({
			...formData,
			[el.target.name]: el.target.value
		})
	};

	const handleSubmit = async (el) => {
		el.preventDefault();
		try {
			const response = await fetch(b_AddMissingPersonURL(), {
				method: 'POST',
				headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${localStorage.getItem("access_token")}`,
				},
				body: JSON.stringify({
					origin: formData.origin,
					calling_name: formData.callingName, // @TODO Add this field to DB
					full_name: formData.fullName, // @TODO Change to two fields names and surnames
					year_of_birth: formData.yearOfBirth,
					length: formData.length,
					hair_colour: formData.hairColor, 
					hair_length: formData.hairLength,
					eye_colour: formData.eyeColor,
					sex: formData.sex,
					distinguishing_marks: formData.distinguishingMarks,
					description: formData.description,
					//images //
				})
			});

			if (response.ok) {
				// Correct server answer
				Swal.fire({
					title: string.newInvestigation.messageSuccess.title ,
					text: string.newInvestigation.messageSuccess.text,
					icon: "success",
					confirmButtonText: string.newInvestigation.messageSuccess.confirmationButtonText,
				});
			} else {
				// Error handle if refused by server
				response.json().then(data=>{
					Swal.fire({
						title: string.newInvestigation.messageErrors.serverError.title,
						text: string.newInvestigation.messageErrors.serverError.text(JSON.stringify(data)),
						icon: "error"
					})
					console.error(JSON.stringify(data))
				})
			}
		} catch (error) {
			// Error handle if syntax error
			Swal.fire({
				title: string.newInvestigation.messageErrors.syntaxError.title,
				text: string.newInvestigation.messageErrors.syntaxError.text,
				icon: 'error'
			});
			console.error(error)
		}
	};

	// Initialize buttons
	let actionButtonText, actionButtonAction;
	switch(step){
		case 0:
			actionButtonText = <>{string.newInvestigation.startButton} {"  "} <i className="nc-icon nc-zoom-split" /></>
				actionButtonAction=()=>setStep(step + 1)
			break;
		case totalSteps:
			actionButtonText = <>Submit {"  "} <i className="nc-icon nc-send" /></>
				actionButtonAction=(el)=>handleSubmit(el)
			break;
		default:
			actionButtonText = <>Continue {"  "} <i className="nc-icon nc-stre-right" /></>
				actionButtonAction=()=>setStep(step + 1)
	}
	return (
	  <Card className="strpied-tabled-with-hover">
	    <StepRender setField={setField} formData={formData} step={step} />
	    <Card.Body className="table-full-width table-responsive px-0">
	      <MKBox mt={4} mb={1}>
		<Row>
		  <Col xs={12}>
		    <ProgressBar variant="dark" animated now={step / totalSteps * 100} />
		  </Col>
		</Row>
		<Row className="my-2">
		  {step > 0 &&
		    <Col>
		      <MKButton
			type="submit"
			variant="gradient"
			color="light"
			onClick={el => setStep(step - 1)}
			fullWidth
		      >
			  <i className="nc-icon nc-stre-left" />
			{string.newInvestigation.goBackButton}
		      </MKButton>
		    </Col>
		  }
		  <Col>
		    <MKButton
		      type="submit"
		      variant="gradient"
		      color="dark"
		      onClick={actionButtonAction}
		      fullWidth
		    >
			{actionButtonText}
		    </MKButton>
		  </Col>
		</Row>
	      </MKBox>
	    </Card.Body>
	  </Card>
	);
}

export default AddMissingPerson;
