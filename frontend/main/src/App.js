/**
=========================================================
 * Material Kit 2 React - v2.0.0
=========================================================

 * Product Page: https://www.creative-tim.com/product/material-kit-react
 * Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "assets/theme";
import Article from "examples/Article/DefaultArticle/index"
import Home from "examples/Home/index"
import ChangeLanguage from "examples/Locale/ChangeLanguage/index"
import Error from "examples/Error/index"

import SignIn from "pages/LandingPages/SignIn/index"
import Logout from "pages/LandingPages/Logout/index"
import ContactUs from "pages/LandingPages/ContactUs/index"
import SignUp from "pages/LandingPages/SignUp/index"

import "bootstrap/dist/css/bootstrap.min.css";
import "campaignWebsite/assets/css/animate.min.css";
import "campaignWebsite/assets/scss/light-bootstrap-dashboard-react.scss";
import "campaignWebsite/assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Dashboard from "campaignWebsite/views/Dashboard";
import Notifications from "campaignWebsite/views/Notifications";
import Icons from "campaignWebsite/views/Icons";
import Maps from "campaignWebsite/views/Maps";
import TableList from "campaignWebsite/views/TableList";
import Typography from "campaignWebsite/views/Typography";
// import AdminLayout from "campaignWebsite/layouts/Upgrade.js";
import UserProfile from "campaignWebsite/views/UserProfile.js";
import AdminLayout from "campaignWebsite/layouts/Admin.js";

// Utils
import { scrollUp } from "utils/scroll"

import MainLayoutPage from "layouts/pages/main";

export default function App() {
	const { pathname } = useLocation();
	useEffect(() => {
		scrollUp()
	}, [pathname]);

	<Route path="admin/" render={(props) => <AdminLayout {...props} />} />
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Routes>
				{/* PANEL */}
					<Route path="authentication/sign-in/" element={<SignIn />} />
					<Route path="authentication/logout" element={<Logout />}/>
					<Route path="authentication/sign-up/" element={<SignUp />} />
					<Route path="contact-us/" element={<ContactUs />} />
					{/* <Route path="managment/" element={<ChangeLanguage />}> */}
					{/* <Route path="country/:country/" element={<ChangeCountry />} /> */}

					<Route path="admin/" element={<AdminLayout />} >
						<Route path="dashboard/" element={<Dashboard />} />
						<Route path="user/" element={<UserProfile />} />
						<Route path="table/" element={<TableList />} />
						<Route path="typography/" element={<Typography />} />
						<Route path="icons/" element={<Icons />} />
						<Route path="maps/" element={<Maps />} />
						<Route path="notifications/" element={<Notifications />} />
					</Route>
					<Route path="/" element={<MainLayoutPage />}>
						<Route path="language/:language/" element={<ChangeLanguage />} />
					</Route>
				{/* PANEL */}
				<Route path="/" element={<MainLayoutPage />}>
					<Route index element={<Home />} />
					{/* SECTIONS */}
					{/* SECTIONS */}
					{/* ARTICLES */}
						<Route path=":category/:country/:language/:article/" element={<Article />} />
					{/* ARTICLES */}
					{/* SUPPORT_US */}	
						{ /* <Route path="support-us/" element={<SupportUs />} /> */}
					{/* SUPPORT_US */}
				</Route>
				<Route path="*" element={<Error />} />
			</Routes>
		</ThemeProvider>
	);
}
