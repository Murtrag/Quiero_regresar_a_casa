import {useEffect, useState} from 'react';
import  parse from 'html-react-parser';
import { b_articleDetailURL } from "urls";
import { scrollUp } from "utils/scroll";
import { replaceComponent } from "utils/replaceComponent";
import { connect } from "react-redux";


const Home = ({locale}) => {
	const params = {
		category: "home",
		country: locale.country,
		language: locale.language,
		article: 0,
	}
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
	}, [])

	return <>
		<style>{state.text_css}</style>
		{state.text_html && parse(state.text_html).map(replaceComponent)}
		</>
}
const mapStateToProps = state => ({
        locale: state.localeReducer
})

export default connect(mapStateToProps, ()=>({}))(Home);

//export default Home
