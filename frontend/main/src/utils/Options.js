import React from "react";

function Select({ data }) {
	return (
			<select>
			{data.map(([value, label]) => (
						<option value={value} key={value}>
						{label}
						</option>
						))}
			</select>
	       );
}

export default Select;
