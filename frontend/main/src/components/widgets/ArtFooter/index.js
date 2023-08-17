import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import string from "strings/article";
import "./style.css"


function ArtFooter({version}){
	return <Row className="row d-flex justify-content-between page-footer">
	  <hr />
	  <Col xs={4}>
	    <p><strong>{string.brand}</strong></p>
	  </Col>
	  <Col xs={3} className="text-version">
		{version} 
	  </Col>
	</Row>
}

export default ArtFooter;
