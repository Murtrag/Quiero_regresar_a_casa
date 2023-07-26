import React from "react";
import string from "strings/myInvestigations";
import SweetAlert2 from 'react-sweetalert2';
import Swal from "sweetalert2";
import { 
	f_loginURL,
	b_myInvestigationsURL 
} from "urls";
import {
//   Badge,
//   Button,
  Card,
//   Navbar,
//   Nav,
// Table,
//   Container,
//   Row,
//   Col,
} from "react-bootstrap";

export default ()=>{
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
					// username: login,
					// first_name: firstName,
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
		return <Card.Header>
			<Card.Title as="h4">{string.newInvestigation.title}</Card.Title>
			<p className="card-category">
			End last step
			</p>
		</Card.Header>
}

