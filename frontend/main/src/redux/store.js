import { createStore} from "redux";
import rootReducer from "./reducers/index";
import { loadState, saveState } from "./localStorage";
const defaultState = {
	localeReducer: {
		language: "mx",
		country: "mx"
	}
}
const state = loadState(defaultState)

const store = createStore(rootReducer, state);
store.subscribe( ()=>{saveState({
	localeReducer: store.getState().localeReducer
})}
)

export default store;
