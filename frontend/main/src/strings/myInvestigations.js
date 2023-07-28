export default {
	newInvestigation: {
		title: "New investigation field",
		description: "Here you can start a new investigation",
		startButton: "Start new investigation",
		goBackButton: "Go step back",
		messageSuccess:{
			title: "Added",
			text: "Your announcment successfully added, still you need to wait for the acceptance from administration",
			confirmationButtonText: "Ok",

		},
		messageErrors:{
			syntaxError: {
				title: "",
				text: ""
			},
			serverError: {
				title: "Server error",
				text: err=> `server error message:
					${err}
				`
			},

		},
		beginning: {
			title: "Informacje podstawowe o zaginionej osobie",
			description: "Podstawowe kryteria niezmienne dotyczące zaginionej osoby",
			fields:{ }

		},
		step1: {
			title: "Informacje podstawowe o zaginionej osobie",
			description: "Podstawowe kryteria niezmienne dotyczące zaginionej osoby",
			fields:{
				callingName: "Calling name",
				fullName: "Full name",
				yearOfBirth: "Year of birth",
				yearOfBirth: "Sex",
				origin: "Origin",
			}

		},
		step2: {
			title: "Informacje podstawowe o zaginionej osobie",
			description: "Podstawowe kryteria niezmienne dotyczące zaginionej osoby",
			fields:{
				hairColor: "Hair color",
				hairLength: "Hair length",
				eyeColor: "Eye color",
				distinguishingMarks: "Distinguishing marks",
			}

		},
		end: {
			title: "Informacje podstawowe o zaginionej osobie",
			description: "Podstawowe kryteria niezmienne dotyczące zaginionej osoby",
			fields:{ }

		},
	},


	currentInvestigations: {
		title: "Your Currect Investigation",
		description: "Here you can find your running investigations"
	}
}
