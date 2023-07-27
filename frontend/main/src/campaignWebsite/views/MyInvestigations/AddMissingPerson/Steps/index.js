import React, { useState } from 'react';
import Beginning from "./Beginning";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import End from "./End";

function StepRender({step, setField, formData}){
	const props = {
		setField,
		formData
	};

	switch(step){
		case 0:
			return <Beginning/>
		case 1:
			return <Step1 {...props}/>
		case 2:
			return <Step2 {...props}/>
		case 3:
			return <Step3 {...props} />
		default:
			return <End {...props}/>
	}
}

export default StepRender;
