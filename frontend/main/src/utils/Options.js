import React from "react";

function Select({ options }) {
	return (
			<select>
			{options.map(([value, label]) => (
						<option value={value} key={value}>
						{label}
						</option>
						))}
			</select>
	       );
}

export default Select;
