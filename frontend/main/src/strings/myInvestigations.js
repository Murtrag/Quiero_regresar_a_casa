export default {
	newInvestigation: {
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
			title: "Report a missing person",
			description: `If you are looking for someone close to you who has gone missing,
			you can report their details here and start a search campaign. We will help you reach out to potential witnesses, 
			organizations and media to increase the chances of finding the missing person.`,
			fields:{labels:{}, placeholders:{} }

		},
		step1: {
			title: "Report a missing person",
			description: "Please provide the following information about the person you are looking for. This will help us create a profile that can be shared with others who might have seen or heard from them.",
			fields:{
				labels:{
					callingName: "Calling name",
					fullName: "Full name",
					yearOfBirth: "Year of birth",
					length: "Length",
					sex: "Sex",
					origin: "Origin",
				},
				placeholders:{
					callingName: "Diego",
					fullName: "Diego Hernández",
					yearOfBirth: "2005",
					length: "165",

				}
			}

		},
		step2: {
			title: "Report a missing person",
			description: "Please provide the following information about the person you are looking for. This will help us create a profile that can be shared with others who might have seen or heard from them.",
			fields:{
				labels:{
					hairColor: "Hair color",
					hairLength: "Hair length",
					eyeColor: "Eye color",
					distinguishingMarks: "Distinguishing marks",
					description: "Description",
				},
				placeholders:{
					distinguishingMarks: "Tattoo on the shoulder",
					description: "He is a smart and curious boy who likes to play soccer and video games. He has short black hair and brown eyes. He was last seen wearing a blue T-shirt, gray shorts, and white sneakers. He has a tattoo of a star on his right shoulder and a birthmark on his left cheek. He may have been kidnapped by a stranger and needs urgent help.",
				}
			}

		},
		step3: {
			title: "Report a missing person",
			description: "Please upload one or more photos of the person you are looking for. The photos should be clear and recent, and show the person's face and other distinctive features. The photos will help us create a poster that can be distributed online and offline.",
			fields:{
				labels:{
					image: "Missing person image/s",
				}
			}

		},
		end: {
			title: "Report a missing person",
			description: "Please upload one or more photos of the person you are looking for. The photos should be clear and recent, and show the person's face and other distinctive features. The photos will help us create a poster that can be distributed online and offline.",
			fields:{ }

		},
	},


	currentInvestigations: {
		title: "Your Currect Investigation",
		description: "Here you can find your running investigations"
	}
}
