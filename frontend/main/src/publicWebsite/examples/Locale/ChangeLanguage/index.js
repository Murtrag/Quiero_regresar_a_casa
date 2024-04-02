import { connect } from "react-redux";
import { changeLanguage } from "redux/actions/locale";
import { useState, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import string from "strings/changeLanguage";
import { splitPathParams, extractPath } from "utils/extractPath";
import { b_articleDetailURL, frontendURL } from "urls";

const ChangeLanguage = ({changeLanguage})=>{
	const params = useParams();
	const location = useLocation();
	const prevLocation = location.state.from.pathname || frontendURL;

	let [timeOut, setTimeOut] = useState(5);

	const getRedirectURL = (path)=>{
		const prevParams = splitPathParams(path);
		const paramsObj = {
				category: prevParams[0],
				country: prevParams[1],
				language: prevParams[2],
				pk: prevParams[3]
			}
		if (extractPath(b_articleDetailURL(paramsObj)) === prevLocation){
			return extractPath(
				b_articleDetailURL({...paramsObj, language: params.language})
			);
		}
		return path
	}


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
		{timeOut===0 && <Navigate to={getRedirectURL(prevLocation)} />/* To prev page with new language */}
		</>
}

const mapDispatchToProps= dispatch=>({
	changeLanguage: (lang) => dispatch(changeLanguage(lang))
})
export default connect(state=>({}), mapDispatchToProps)(ChangeLanguage)
