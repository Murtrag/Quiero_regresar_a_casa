// Action types
const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";
const CHANGE_COUNTRY = "CHANGE_LANGUAGE";

// Action builders
const changeLanguage = language=>({
	type: CHANGE_LANGUAGE,
	payload: {
		language
	}
})

const changeCountry = country=>({
	type: CHANGE_COUNTRY,
	payload: {
		country
	}
})

export {
	CHANGE_LANGUAGE,
	CHANGE_COUNTRY,
	changeLanguage,
	changeCountry,
}
