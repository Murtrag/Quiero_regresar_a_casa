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
	loginWindow:{
		fields:{
			login: "Login",
			password: "Password",
			rememberMe: "Remember me"
		},
		message: "Don't have an account?",
		messageButton: "Sign up" 
	},


}
