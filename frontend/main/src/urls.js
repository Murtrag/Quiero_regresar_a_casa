// Protocol
const protocolPrefix = "http://"
// Core URLs
const backendURL = `${protocolPrefix}83.128.215.51:81/`
const frontendURL = `${window.location.protocol}//${window.location.host}/`;


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
const b_userProfileURL = ({pk}) => backendURL + `dashboard/user-profile/${pk}/`

const f_myInvestigationsURL = () => frontendURL + 'dashboard/my-investigations/'
const b_myInvestigationsURL = () => backendURL + 'dashboard/my-investigations/'

const f_promotionsURL = () => frontendURL + 'dashboard/promotions/'
const b_promotionsURL = () => backendURL + 'dashboard/promotions/'

const f_notifications = () => frontendURL + 'dashboard/notifications/'
const b_notifications = () => backendURL + 'dashboard/notifications/'

const f_securitySettings = () => frontendURL + 'dashboard/securitySettings/'
const b_securitySettings = () => backendURL + 'dashboard/securitySettings/'


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
                          
        f_notifications,
        b_notifications,
                          
        f_securitySettings,
        b_securitySettings,
}
