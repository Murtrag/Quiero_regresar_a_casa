import React from "react";
import {useEffect, useState} from "react";
import SweetAlert2 from 'react-sweetalert2';
import Swal from "sweetalert2";

import string from "strings/userProfile";
import { 
	f_loginURL,
	b_userProfileURL
} from "urls";

// import { fetchData } from "./fetch.js";
import { nlToBr } from "utils/parse";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col
} from "react-bootstrap";

function User() {
  const [swalProps, setSwalProps] = useState({});

  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [profileDescription, setProfileDescription] = useState('');
  const [reset, setReset] = useState(false);

  useEffect(()=>{
		fetch(b_userProfileURL(), {
			method: 'GET',
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${localStorage.getItem("access_token")}`,
			}
		}).then(response => {
			if (response.status === 401) {
				window.location.href = f_loginURL();
				
			} else {
				return response.json();
			}
		})
		  .then((state) => {
			  setLogin(state.username);
			  setFirstName(state.first_name);
			  setLastName(state.last_name);
			  setEmail(state.email);
			  setPhoneNumber(state.phone_number);
			  setAddress(state.address);
			  setCity(state.city);
			  setCountry(state.country);
			  setPostalCode(state.postal_code);
			  setProfileDescription(state.profile_description);
		  })
		  .catch(error => {
			  console.error(error);
		  });
  }, [reset])


  const handleReset = (e) => {
	  Swal.fire({
	    title: string.messageReset.title,
	    text: string.messageReset.text,
	    showCancelButton: true,
            icon: "warning",
	    confirmButtonText: string.messageReset.confirmationButtonText,
          }).then((el)=> {
		  if (el.isConfirmed){
			  setReset(!reset)
		  }
            });
  }


  const handleSubmit = async (el) => {
	el.preventDefault();
	try {
		const response = await fetch(b_userProfileURL(), {
			method: 'PATCH',
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${localStorage.getItem("access_token")}`,
			},
			body: JSON.stringify({
				username: login,
				first_name: firstName,
				last_name: lastName,
				email: email,
				phone_number: phoneNumber,
				address: address,
				city: city,
				country: country,
				postal_code: postalCode,
				profile_description: profileDescription,
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
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Edit Profile</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={el=>handleSubmit(el)}>
                  <Row>
                    <Col className="pr-1" md="5">
                      <Form.Group>
                        <label>Company (disabled)</label>
                        <Form.Control
                          defaultValue="Creative Code Inc."
                          disabled
                          placeholder="Company"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="3">
                      <Form.Group>
                        <label>{string.fields.labels.login}</label>
                        <Form.Control
                          value={login}
                          placeholder={string.fields.placeholders.login}
			  onChange={e=>setLogin(e.target.value)}
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">
			  {string.fields.labels.email} 
                        </label>
                        <Form.Control
                          placeholder={string.fields.placeholders.email}
			  onChange={e=>setEmail(e.target.value)}
	  		  value={email}
                          type="email"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>{string.fields.labels.firstName}</label>
                        <Form.Control
                          value={firstName}
                          placeholder={string.fields.placeholders.firstName}
			  onChange={e=>setFirstName(e.target.value)}
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>{string.fields.labels.lastName}</label>
                        <Form.Control
                          value={lastName}
                          placeholder={string.fields.placeholders.lastName}
			  onChange={e=>setLastName(e.target.value)}
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>{string.fields.labels.address}</label>
                        <Form.Control
                          value={address}
                          placeholder={string.fields.placeholders.address}
			  onChange={e=>setAddress(e.target.value)}
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>{string.fields.labels.phoneNumber}</label>
                        <Form.Control
                          value={phoneNumber}
                          placeholder={string.fields.placeholders.phoneNumber}
			  onChange={e=>setPhoneNumber(e.target.value)}
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>{string.fields.labels.city}</label>
                        <Form.Control
                          value={city}
                          placeholder={string.fields.placeholders.city}
			  onChange={e=>setCity(e.target.value)}
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="4">
                      <Form.Group>
                        <label>{string.fields.labels.country}</label>
                        <Form.Control
                          value={country}
                          placeholder={string.fields.placeholders.country}
			  onChange={e=>setCountry(e.target.value)}
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label>{string.fields.labels.postalCode}</label>
                        <Form.Control
                          placeholder={string.fields.placeholders.postalCode}
			  onChange={e=>setPostalCode(e.target.value)}
	  		  value={postalCode}
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>{string.fields.labels.profileDescription}</label>
                        <Form.Control
                          cols="80"
                          value={profileDescription}
                          placeholder={string.fields.placeholders.profileDescription}
			  onChange={e=>setProfileDescription(e.target.value)}
                          rows="4"
                          as="textarea"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                  >&nbsp;
		    {string.buttons.updateProfile}
                  </Button>
                  <Button
                    className="btn-fill pull-right"
                    type="button"
	  	    onClick={(el)=>handleReset(el)}
                    variant="danger"
                  >
		    {string.buttons.resetFields}
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-user">
              <div className="card-image">
                <img
                  alt="..."
                  src={require("assets/images/photo-1431578500526-4d9613015464.jpeg")}
                ></img>
              </div>
              <Card.Body>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/images/faces/face-3.jpg")}
                    ></img>
                    <h5 className="title">{firstName + " " + lastName}</h5>
                  </a>
                  <p className="description">{login}</p>
                </div>
                <p className="description text-center">
	  	  {nlToBr(profileDescription)}
                </p>
              </Card.Body>
              <hr></hr>
              <div className="button-container mr-auto ml-auto">
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-facebook-square"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-twitter"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-google-plus-square"></i>
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
      <SweetAlert2 {...swalProps} />
    </>
  );
}

export default User;