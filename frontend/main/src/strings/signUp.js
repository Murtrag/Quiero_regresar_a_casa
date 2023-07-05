export default {
	navBar:{
		button: "Sign In"
	},
	messageSuccess:{
		title: "Registration success",
		text: "You registered successfully, the registration requires also email confirmation",
		button: "Resend conirmation email",
		confirmButtonText: "Ok",
		cancelButtonText: "Resend confirmation email"
	},
	messageErrors:{
		serverError:{
			title: 'Registration error',
			text: data=>`Server message ${JSON.stringify(data)}`,
		},
		syntaxError:{
			title: 'Registration error',
			text: `error: `,
		}
	},
	fields:{
		login:"Login",
		email:"Email",
		password:"Password",
		repeatEmail:"Repeat email",
		repeatPassword:"Repeat password",
		firstName:"First Name(s)",
		lastName:"Last Name(s)",
		phoneNumber:"Phone number",
		profileDescription:"Profile description",
		acceptTerms:"Accept the terms and conditions"

	}
}
