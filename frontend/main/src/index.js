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
// import React from "react";
// import { createRoot } from 'react-dom/client'
// import { BrowserRouter } from "react-router-dom";
import App from "App";

import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "redux/store"
import { BrowserRouter } from "react-router-dom";
import "assets/fonts/Mexicana.ttf";
import "assets/customCSS/index.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<Provider store={store}>	
			<App />
		</Provider>
	</BrowserRouter>,
);

