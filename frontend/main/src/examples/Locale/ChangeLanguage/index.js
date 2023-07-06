import { connect } from "react-redux";
import { changeLanguage } from "redux/actions/locale";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import string from "strings/changeLanguage";

const ChangeLanguage = ({changeLanguage})=>{
	const params = useParams();

	let [timeOut, setTimeOut] = useState(5);
	// let previousPage = getPrevPage();
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
	return <>
		<h1>{string.page.message.title}</h1>
		<p>{string.page.message.text(timeOut)}</p>
		{timeOut===0 && <Navigate to='/' />/* To prev page with new language */}
		</>
}

const mapDispatchToProps= dispatch=>({
	changeLanguage: (lang) => dispatch(changeLanguage(lang))
})
export default connect(state=>({}), mapDispatchToProps)(ChangeLanguage)
