import React from "react";
import { Form, } from "react-bootstrap";
function Select({ data, ...props }) {
	return <Form.Select {...props}> 
			{data.map(([value, label]) => (
						<option value={value} key={value}>
						{label}
						</option>
						))}
		</Form.Select>
}

export default Select;
