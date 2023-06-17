// const serverURL = "http://quiero-regresar.mx:81/"
//const serverURL = 'http://127.0.0.1:8000/'
//const serverURL = "http://136.143.5.43:81/"
const serverURL = "http://192.168.1.3:8000/"

// Articles URLs
const articleDetailURL = ({category, country, language, pk})=>serverURL + `article/${country}/${language}/${pk}/`


// Main URLs
const footerURL = ({country, language})=>serverURL + `footer/${country}/${language}/`
const mottoURL = ({language})=>serverURL + `motto/${language}/`
const navBarURL = ({country, language})=>serverURL + `nav-bar/${country}/${language}/`

export {
	serverURL,

	articleDetailURL,

	footerURL,
	mottoURL,
	navBarURL,
}



