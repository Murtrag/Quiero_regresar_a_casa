export default {
	navBar:{
		button: "Sign Up",
	},
	messageSuccess:{
		title: "Login success",
		text: "You have successfully loged in",
		confirmButtonText: "Ok",
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
		login: "Login",
		password: "Password",
		rememberMe: "Remember me"
	}

}
