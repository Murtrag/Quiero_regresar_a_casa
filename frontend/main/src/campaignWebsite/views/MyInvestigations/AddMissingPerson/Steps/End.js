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

export default ({})=>{
		return <Card.Header>
			<Card.Title as="h4">{string.newInvestigation.title}</Card.Title>
			<p className="card-category">
			End last step
			</p>
		</Card.Header>
}

