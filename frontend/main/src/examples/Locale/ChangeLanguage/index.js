import { connect } from "react-redux";
import { changeLanguage } from "redux/actions/locale";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import strinf from "string/changeLanguage";

const ChangeLanguage = ({changeLanguage})=>{
	const params = useParams();

	let [timeOut, setTimeOut] = useState(5);
	var timerId;
	useEffect(()=>{
		if (timeOut>0){
			timerId = setInterval(
				()=>{
					setTimeOut(timeOut-1)
				}, 1000
			)	
		}else{
			changeLanguage(params.language);

		}
		return () => clearInterval(timerId);
	},[timeOut])

		// <h1>You changed language to {params.language} </h1>
		// <p>You will get redirected in {timeOut} seconds</p>
	return <>
		<h1>{string.page.message.title}</h1>
		<p>{string.page.message.text(timeOut)}</p>
		{timeOut==0 && <Navigate to='/' />}
		</>
}

const mapDispatchToProps= dispatch=>({
	changeLanguage: (lang) => dispatch(changeLanguage(lang))
})
export default connect(state=>({}), mapDispatchToProps)(ChangeLanguage)
