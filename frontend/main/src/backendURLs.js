// const serverURL = "http://quiero-regresar.mx:81/"
//const serverURL = 'http://127.0.0.1:8000/'
const serverURL = "http://83.128.215.51:81/"
//const serverURL = "http://192.168.1.3:8000/"

// Articles URLs
const articleDetailURL = ({category, country, language, pk})=>serverURL + `${category}/${country}/${language}/${pk}/`;


// Main URLs
const footerURL = ({country, language})=>serverURL + `footer/${country}/${language}/`;
const mottoURL = ({language})=>serverURL + `motto/${language}/`;
const navBarURL = ({country, language})=>serverURL + `nav-bar/${country}/${language}/`;

// User URLs
const tokenURL = ()=> serverURL + 'token/';

export {
	serverURL,

	articleDetailURL,

	footerURL,
	mottoURL,
	navBarURL,
}



