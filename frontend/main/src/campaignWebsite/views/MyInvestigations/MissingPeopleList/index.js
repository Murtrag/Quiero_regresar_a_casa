import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import MissingPersonCard from "./MissingPersonCard"
import "./style.css";
import {useEffect, useState} from "react";
import {
	b_missingPeopleListURL,
	f_loginURL
} from "urls";

const MissingPeople = () => {
  const [data, setData] = useState(Array());


  useEffect(()=>{
		fetch(b_missingPeopleListURL(), {
			method: 'GET',
			headers: {
				"Content-Type": "application/json",
				// "Authorization": `Bearer ${localStorage.getItem("access_token")}`,
			}
		}).then(response => {
			if (response.status === 401) {
				window.location.href = f_loginURL();
				
			} else {
				return response.json();
			}
		})
		  .then((state) => {
			  setData(state);
		  })
		  .catch(error => {
			  console.error(error);
		  });
  }, [])
  return (
    <Container fluid>
	  <Row>
	  {
		  data.map(({full_name, description, images, calling_name, id })=>(
			<MissingPersonCard  key={id} callingName={calling_name} fullName={full_name} description={description} image={images[0].image} />	
		  ))
	  }
	  </Row>

    </Container>
  );
};

export default MissingPeople;
