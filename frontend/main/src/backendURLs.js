const serverURL = "http://quiero-regresar.mx:81/"
//const serverURL = 'http://127.0.0.1:8000/'

// Articles URLs
const articleListURL = ({country, language})=>serverURL + `articles/${country}/${language}/`
const articleDetailURL = ({country, language, pk})=>serverURL + `article/${country}/${language}/${pk}/`


// Main URLs
const footerURL = ({country, language})=>serverURL + `footer/${country}/${language}/`
const mottoURL = ({country})=>serverURL + `motto/${country}/`
const navBarURL = ({country, language})=>serverURL + `nav-bar/${country}/${language}/`

export {
	serverURL,

	articleListURL,
	articleDetailURL,

	footerURL,
	mottoURL,
	navBarURL,
}



