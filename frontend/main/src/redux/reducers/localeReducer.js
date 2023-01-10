// Import action types
import { CHANGE_LANGUAGE, CHANGE_COUNTRY } from "redux/actions/locale";


function localeReducer(state={language: 'mx', country: 'mx'}, action){
	switch(action.type){
		case CHANGE_LANGUAGE:
			return {
				...state,
				...action.payload
			}
		case CHANGE_COUNTRY:
			return {
				...state,
				...action.payload
			}
	}
	return state
}
export default localeReducer
