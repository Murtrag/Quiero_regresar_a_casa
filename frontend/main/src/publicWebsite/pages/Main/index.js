/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "publicWebsite/components/MKBox";
import MKTypography from "publicWebsite/components/MKTypography";
import MKSocialButton from "publicWebsite/components/MKSocialButton";

// Material Kit 2 React examples
import DefaultNavbar from "publicWebsite/examples/Navbars/DefaultNavbar";
import DefaultFooter from "publicWebsite/examples/Footers/DefaultFooter";
import FilledInfoCard from "publicWebsite/examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections
// import Counters from "publicWebsite/pages/Presentation/sections/Counters";
// import Information from "publicWebsite/pages/Presentation/sections/Information";
// import DesignBlocks from "publicWebsite/pages/Presentation/sections/DesignBlocks";
// import Pages from "publicWebsite/pages/Presentation/sections/Pages";
// import Testimonials from "publicWebsite/pages/Presentation/sections/Testimonials";
// import Download from "publicWebsite/pages/Presentation/sections/Download";
import Article from "publicWebsite/components/widgets/Article";

// Presentation page components
import BuiltByDevelopers from "publicWebsite/pages/Main/components/BuiltByDevelopers";

// Routes
import routes from "publicWebsite/routes";
import footerRoutes from "footer.routes";
import { Outlet, Link } from "react-router-dom";

// Images
import bgImage from "assets/images/bg-presentation.jpg";

// Styles
import "assets/customCSS/main.css";



import { f_logoutURL, f_loginURL, b_mottoURL } from "urls";
import { extractPath } from "utils/extractPath";

import {useEffect, useState} from 'react';
import { connect } from "react-redux";

function MainLayout({locale}) {
  const [isAuth, setIsAuth] = useState(false);


  useEffect(() => {
	  if (localStorage.getItem('access_token') !== null) {
		  setIsAuth(true); 
	}
  }, [isAuth]);


  let [state, setState] = useState({
     header: "",
     description: ""
  });
    
	useEffect(()=>{
		fetch(b_mottoURL({
			language: locale.language
		})).then(response=>response.json())
		.then((state)=>{
			setState({
				...state,
				state
			})
		})
	}, [locale])
    
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
	  prop: isAuth ? true : false,
          route: extractPath(isAuth? f_logoutURL():f_loginURL()),
          label: isAuth?  "Logout":"Sign In",
          color: "dark",
        }}
        sticky
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
	  backgroundImage: `linear-gradient(195deg, rgba(66, 66, 74, 0.6), rgba(25, 25, 25, 0.6)),url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={10} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
	      className="baner-header"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            > { state.header + " " }
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
	      className="baner-motto"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
                { state.description }
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >

        <Container>
	  <Outlet />
        </Container>
        <MKBox pt={18} pb={6}>
        </MKBox>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

const mapStateToProps = state => ({
	locale: state.localeReducer
})

export default connect(mapStateToProps)(MainLayout);
