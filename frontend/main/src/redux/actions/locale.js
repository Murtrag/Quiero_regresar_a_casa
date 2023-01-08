// Action types
const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";
const CHANGE_COUNTRY = "CHANGE_LANGUAGE";

// Action builders
const changeLanguageAction = language=>({
	type: CHANGE_LANGUAGE,
	payload: {
		language
	}
})

const changeCountryAction = country=>({
	type: CHANGE_COUNTRY,
	payload: {
		country
	}
})

export {
	CHANGE_LANGUAGE,
	CHANGE_COUNTRY,
	changeLanguageAction,
	changeCountryAction,
}
