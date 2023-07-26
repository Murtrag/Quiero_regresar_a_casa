import React from 'react';
import string from "strings/myInvestigations";

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
		origin: "mx",
		hairColor: 0
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
			const response = await fetch(b_myInvestigationsURL(), {
				method: 'PATCH',
				headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${localStorage.getItem("access_token")}`,
				},
				body: JSON.stringify({
					origin: data.origin,
					calling_name: data.callingName, // @TODO Add this field to DB
					full_name: data.fullName, // @TODO Change to two fields names and surnames
					year_of_birth: data.yearOfBirth,
					length: data.length,
					hair_colour: data.hairColor, 
					hair_length: data.hairLength,
					eye_colour: data.eyeColor,
					sex: data.sex,
					distinguishing_marks: data.distinguishingMarks,
					description: data.description,
					//images //
				})
			});

			if (response.ok) {
				Swal.fire({
					title: string.messageSuccess.title ,
					text: string.messageSuccess.text,
					icon: 'success',
					confirmButtonText: string.messageSuccess.confirmationButtonText,
				});
			} else {
				// Error handle if refused by server
				response.json().then(data=>{
					Swal.fire({
						title: 'Update error',
						text: `error: ${JSON.stringify(data)}`,
						icon: 'error'
					})
				})
			}
		} catch (error) {
			Swal.fire({
				title: string.messageErrors.syntaxError.title,
				text: string.messageErrors.syntaxError.text,
				icon: 'error'
			});
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
	    <StepRender setStep={setStem} formData={formData} step={step} />
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
