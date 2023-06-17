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
import ContactUs from "pages/LandingPages/ContactUs/index"

// Utils
import { scrollUp } from "utils/scroll"

import MainLayoutPage from "layouts/pages/main";

export default function App() {
	const { pathname } = useLocation();
	useEffect(() => {
		scrollUp()
	}, [pathname]);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Routes>
				{/* PANEL */}
					<Route path="authentication/sign-in/" element={<SignIn />} />
					{/* <Route path="authentication/sign-up/" element={<SignUp />} /> */}
					<Route path="contact-us/" element={<ContactUs />} />
					{/* <Route path="managment/" element={<ChangeLanguage />}> */}
					{/* <Route path="country/:country/" element={<ChangeCountry />} /> */}
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
