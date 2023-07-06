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
			title: 'Login error',
			text: data=>`Server message ${JSON.stringify(data)}`,
		},
		syntaxError:{
			title: 'Login error',
			text: `Syntax error, please contact administrators `,
		}
	},
	fields:{
		login: "Login",
		password: "Password",
		rememberMe: "Remember me"
	}

}
