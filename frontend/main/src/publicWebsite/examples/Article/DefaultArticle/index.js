import {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import { b_articleDetailURL } from "urls";
import  parse from 'html-react-parser';


//Utils
import { scrollUp } from "utils/scroll";

import { replaceComponent } from "./tools/components";

const Article = () => {
	const params = useParams();

	const [state, setState] = useState({
		title: "",
		text_html: "",
		text_css: ""
	})

	useEffect(()=>{
		fetch(b_articleDetailURL({
			category: params.category,
			country: params.country,
			language: params.language,
			pk: params.article
		})).then(response=>response.json())
			.then((newState)=>{
				setState({
					...state,
					...newState
				})
				scrollUp()
			})
	}, [params])
	return <>
		<style>{state.text_css}</style>
		{state.text_html && parse(state.text_html).map(replaceComponent)}
		</>

};

export default Article
