// import { createStore, applyMiddleware} from "redux";
// import thunk from "redux-thunk";
import { createStore} from "redux";
import rootReducer from "./reducers/index";

const defaultState = {
	// State loaded from memory
	localeReducer: {
		language: "MX",
		country: "MX"
	}
}
const store = createStore(rootReducer, defaultState);
console.log(store.getState())

export default store;
