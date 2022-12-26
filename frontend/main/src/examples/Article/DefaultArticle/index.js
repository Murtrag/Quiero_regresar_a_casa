import {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import { articleDetailURL } from "backendURLs"

// Components
import Counters from "pages/Main/sections/Counters";
import Information from "pages/Main/sections/Information";
import DesignBlocks from "pages/Main/sections/DesignBlocks";
import Pages from "pages/Main/sections/Pages";
import Testimonials from "pages/Main/sections/Testimonials";
import Download from "pages/Main/sections/Download";

const Article = () => {
	const params = useParams();

	const [state, setState] = useState({
		title: "",
		text_html: "",
		text_css: ""
	})

	useEffect(()=>{
		var language, country, pk;
		fetch(articleDetailURL(
			country=params.country,
			language=params.language,
			pk=params.article
		)).then(response=>response.json())
			.then((state)=>{
				setState({
					...state,
					state
				})
			})
	}, [])
	return <>
		<style>{state.text_css}</style>
		<div dangerouslySetInnerHTML={{__html: state.text_html}} />
		</>

};

export default Article
