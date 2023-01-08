// Import action types
import { CHANGE_LANGUAGE, CHANGE_COUNTRY } from "redux/actions/locale";


function localeReducer(state={language: 'MX', country: 'MX'}, action){
	switch(action.type){
		case CHANGE_LANGUAGE:
			return {
				...state,
				...state.payload
			}
		case CHANGE_COUNTRY:
			return {
				...state,
				...state.payload
			}
	}
	return state
}
export default localeReducer
