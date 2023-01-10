import { createStore} from "redux";
import rootReducer from "./reducers/index";

const defaultState = {
	// State loaded from memory
	localeReducer: {
		language: "mx",
		country: "mx"
	}
}
const store = createStore(rootReducer, defaultState);
console.log(store.getState())

export default store;
