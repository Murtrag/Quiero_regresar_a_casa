import React from "react";

function Select({ data }) {
	return <> 
			{data.map(([value, label]) => (
						<option value={value} key={value}>
						{label}
						</option>
						))}
		</>
}

export default Select;
