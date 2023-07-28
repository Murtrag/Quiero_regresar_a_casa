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
	},


	currentInvestigations: {
		title: "Your Currect Investigation",
		description: "Here you can find your running investigations"
	}
}
