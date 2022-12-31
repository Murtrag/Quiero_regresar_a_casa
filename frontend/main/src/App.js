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

// import { useEffect } from "react";

// // react-router components
// import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// // @mui material components
// import { ThemeProvider } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";

// // Material Kit 2 React themes
// import theme from "assets/theme";
// import Presentation from "layouts/pages/presentation";

// // Material Kit 2 React routes
// import routes from "routes";

// export default function App() {
//   const { pathname } = useLocation();

//   // Setting page scroll to 0 when changing the route
//   useEffect(() => {
//     document.documentElement.scrollTop = 0;
//     document.scrollingElement.scrollTop = 0;
//   }, [pathname]);

//   const getRoutes = (allRoutes) =>
//     allRoutes.map((route) => {
//       if (route.collapse) {
//         return getRoutes(route.collapse);
//       }

//       if (route.route) {
//         return <Route exact path={route.route} element={route.component} key={route.key} />;
//       }

//       return null;
//     });
// const NoPage = () => {
//   return <h1>404</h1>;
// };


// return (
//   <ThemeProvider theme={theme}>
//     <CssBaseline />
//     <Routes>
//       {getRoutes(routes)}
//       <Route path="/" element={<Presentation />} />
// { /* <Route index element={<h1>Main page</h1>} /> */ }
// <Route path="test" element={<b>test</b>} /> 
// <Route path="*" element={<NoPage />} />
// <Route />
//     </Routes>
//   </ThemeProvider>
// );
// }

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "assets/theme";
import Article from "examples/Article/DefaultArticle/index"

import MainLayoutPage from "layouts/pages/main";
const Home = () => {
	return <h1>Home</h1>;
};
const NoPage = () => {
	return <h1>404</h1>;
};
export default function App() {
	const { pathname } = useLocation();
	useEffect(() => {
		document.documentElement.scrollTop = 0;
		document.scrollingElement.scrollTop = 0;
	}, [pathname]);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Routes>
				<Route path="/" element={<MainLayoutPage />}>
					<Route index element={<Home />} />
					{/* PANEL */}
						{/* <Route path="sign-in/" element={<SignIn />} /> */}
						{/* <Route path="register/" element={<Register />} /> */}
						{/* <Route path="country/:country/" element={<ChangeCountry />} /> */}
						{/* <Route path="managment/" element={<ChangeLanguage />}> */}
						{/* </Route> */}
					{/* PANEL */}
					{/* SECTIONS */}
					{/* SECTIONS */}
					{/* ARTICLES */}
						<Route path="article/:country/:language/:article/" element={<Article />} />
					{/* ARTICLES */}
					{/* SUPPORT_US */}	
						{ /* <Route path="support-us/" element={<SupportUs />} /> */}
					{/* SUPPORT_US */}
					<Route path="*" element={<NoPage />} />
				</Route>
			</Routes>
		</ThemeProvider>
	);
}
