import React from "react";
import {useEffect, useState} from "react";

import string from "strings/userProfile";
import { 
	f_loginURL,
	b_userProfileURL
} from "urls";

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

  useEffect(()=>{
		fetch(b_userProfileURL(), {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${localStorage.getItem("access_token")}`,
			},
			body: JSON.stringify({
				access_token: localStorage.getItem("access_token"),
			}),
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
			  setCity(state.city);
			  setCountry(state.country);
			  setPostalCode(state.postal_code);
			  // setProfileDescription(state.profile_description);
		  })
		  .catch(error => {
			  // Obsługa innych błędów
			  console.error(error);
		  });


  }, [])



  const handleSubmit = async (e) => {
	e.preventDefault();
	// Turn off a sweet alert
	setSwalProps({ show: false })

	try {
		const response = await fetch(b_userProfileURL(), {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: login,
				email: email,
				first_name: firstName,
				last_name: lastName,
				phone_number: phoneNumber,
				profile_description: profileDescription
			})
		});

		if (response.ok) {
			setSwalProps({
				show: true,
				title: string.messageSuccess.title ,
				text: string.messageSuccess.text,
				icon: 'success',
				button: string.messageSuccess.button,
				showCancelButton: true,
				confirmButtonText: string.messageSuccess.confirmationButtonText,
				cancelButtonText: string.messageSuccess.cancelButtonText
			});
			// window.location.href = '/';
		} else {
			// Error handle if refused by server
			response.json().then(data=>{
				setSwalProps({
					show: true,
					title: 'Registration error',
					text: `error: ${JSON.stringify(data)}`,
					icon: 'error'
				}).then(function(){
					// function when confirm button clicked
				}, function(dismiss){
					if(dismiss == 'cancel'){
						// function when cancel button is clicked
						console.log('resend email')
					}
				})
			})
		}
	} catch (error) {
			setSwalProps({
				show: true,
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
                <Form>
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
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label>{string.fields.labels.postalCode}</label>
                        <Form.Control
                          placeholder={string.fields.placeholders.postalCode}
	  		  value={postalCode}
                          type="number"
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
                  >
                    Update Profile
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
                    <h5 className="title">Mike Andrew</h5>
                  </a>
                  <p className="description">michael24</p>
                </div>
                <p className="description text-center">
                  "Lamborghini Mercy <br></br>
                  Your chick she so thirsty <br></br>
                  I'm in that two seat Lambo"
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
    </>
  );
}

export default User;
