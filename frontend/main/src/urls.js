// Protocol
const protocolPrefix = "http://"
// Core URLs
const backendURL = `${protocolPrefix}83.128.215.51:81/`
const frontendURL = `${window.location.protocol}//${window.location.host}/`;


// class Url{
// 	constructor=()=>{

// 	}
// 	getPath = ({...params})=>{
// 		return self._path
// 	}
// 	getUrl = ({...params})=>{
// 		return self._host + self.getPath(...params);
// 	}
	
// }

// const b_articleDetailURL = new Url(backendURL, )

// backend.seturls({

// })

// public site
// Articles URLs
const b_articleDetailURL = ({category, country, language, pk})=>backendURL + `${category}/${country}/${language}/${pk}/`;


// Main URLs
const b_footerURL = ({country, language}) => backendURL + `footer/${country}/${language}/`;
const b_mottoURL = ({language}) => backendURL + `motto/${language}/`;
const b_navBarURL = ({country, language}) => backendURL + `nav-bar/${country}/${language}/`;

// User URLs
const f_loginURL = () => frontendURL + 'authentication/sign-in/' // Move to frontendURLs
const b_loginURL = () => backendURL + 'authentication/sign-in/' // Move to frontendURLs

const f_signUpURL = () => frontendURL + 'authentication/sign-up/' //Move to frontendURLs
const b_signUpURL = () => backendURL + 'authentication/sign-up/' //Move to frontendURLs

const f_logoutURL = () => frontendURL + 'authentication/logout/'; //Copy to frontendURLs
const b_logoutURL = () => backendURL + 'authentication/logout/'; //Copy to frontendURLs

const b_tokenURL = () => backendURL + 'authentication/token/';
const b_profileURL = () => backendURL + 'authentication/profile/'; //Edit profile

// capeign site

const f_dashboardURL = () => frontendURL + 'dashboard/'
const b_dashboardURL = () => backendURL + 'dashboard/'

const f_userProfileURL = () => frontendURL + 'dashboard/user-profile/'
const b_userProfileURL = () => backendURL + `dashboard/user-profile/`
// const b_userProfileUpdateURL = () => backendURL + `dashboard/user-profile/`

const f_myInvestigationsURL = () => frontendURL + 'dashboard/my-investigations/'
const b_myInvestigationsURL = () => backendURL + 'dashboard/my-investigations/'

const f_promotionsURL = () => frontendURL + 'dashboard/promotions/'
const b_promotionsURL = () => backendURL + 'dashboard/promotions/'

const f_notificationsURL = () => frontendURL + 'dashboard/notifications/'
const b_notificationsURL = () => backendURL + 'dashboard/notifications/'

const f_securitySettingsURL = () => frontendURL + 'dashboard/security-settings/'
const b_securitySettingsURL = () => backendURL + 'dashboard/security-settings/'

const f_missingPeopleURL = () => frontendURL + 'dashboard/missing-people/';
const b_missingPeopleListURL = () => backendURL + 'dashboard/missing-people/';
const b_AddMissingPersonURL = () => backendURL + 'dashboard/missing-people/';
const b_missingPeopleDetailURL = ({ pk }) => backendURL + `dashboard/missing-people/${pk}/`;


export {
	// Core URLs
	backendURL,
	frontendURL,

	// Articles URLs
	b_articleDetailURL,

	// Main URLs
	b_footerURL,
	b_mottoURL,
	b_navBarURL,

	// User URLs
	f_loginURL,
	b_loginURL,

	f_signUpURL,
	b_signUpURL,

	f_logoutURL,
	b_logoutURL,

	b_tokenURL,

	// capeign site
	f_dashboardURL,
                          
        f_userProfileURL,
        b_userProfileURL,
                          
        f_myInvestigationsURL,
        b_myInvestigationsURL,
                          
        f_promotionsURL,
        b_promotionsURL,
                          
        f_notificationsURL,
        b_notificationsURL,
                          
        f_securitySettingsURL,
        b_securitySettingsURL,

	// Missing people functionality
	f_missingPeopleURL,
	b_missingPeopleListURL,
	b_AddMissingPersonURL,
	b_missingPeopleDetailURL,
}
