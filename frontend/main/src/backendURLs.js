// const backendURL = "http://quiero-regresar.mx:81/"
//const backendURL = 'http://127.0.0.1:8000/'
const backendURL = "http://83.128.215.51:81/"
const frontendURL = "http://quiero-regresar.mx/"
//const backendURL = "http://192.168.1.3:8000/"

// Articles URLs
const articleDetailURL = ({category, country, language, pk})=>backendURL + `${category}/${country}/${language}/${pk}/`;


// Main URLs
const footerURL = ({country, language})=>backendURL + `footer/${country}/${language}/`;
const mottoURL = ({language})=>backendURL + `motto/${language}/`;
const navBarURL = ({country, language})=backendURL + `nav-bar/${country}/${language}/`;

// User URLs
const loginURL = ()=> backendURL + 'authentication/sign-in/' // Move to frontendURLs
const signUpURL = ()=> backendURL + 'authentication/sign-up/' //Move to frontendURLs
const tokenURL = ()=> backendURL + 'authentication/token/';
const logoutURL = ()=> backendURL + 'authentication/logout/'; //Copy to frontendURLs
const profileURL = ()=> backendURL + 'authentication/profile/'; //Edit profile

export {
	backendURL,

	articleDetailURL,

	footerURL,
	mottoURL,
	navBarURL,

	loginURL,
	tokenURL,
	logoutURL
}



