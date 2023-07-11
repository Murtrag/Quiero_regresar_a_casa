// @mui material components
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "publicWebsite/components/MKBox";
import MKInput from "publicWebsite/components/MKInput";
import MKButton from "publicWebsite/components/MKButton";
import MKTypography from "publicWebsite/components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "publicWebsite/examples/Navbars/DefaultNavbar";
import DefaultFooter from "publicWebsite/examples/Footers/DefaultFooter";

// Routes
import routes from "publicWebsite/routes";
import footerRoutes from "footer.routes";

import string from "strings/contactUs";
// Image
import bgImage from "assets/images/illustrations/illustration-reset.jpg";
import "assets/customCSS/contactUs.css";


import {useEffect, useState} from 'react';
import { f_logoutURL, f_loginURL } from "urls";
import { extractPath } from "utils/extractPath";

function ContactUs() {
  const [isAuth, setIsAuth] = useState(false);


  useEffect(() => {
	  if (localStorage.getItem('access_token') !== null) {
		  setIsAuth(true); 
	}
  }, [isAuth]);
  return (
    <>
      <MKBox position="fixed" top="0.5rem" width="100%">
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
      </MKBox>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} lg={6}>
          <MKBox
            display={{ xs: "none", lg: "flex" }}
            width="calc(100% - 2rem)"
            height="calc(100vh - 2rem)"
            borderRadius="lg"
	    className="left-image"
            ml={2}
            mt={2}
            sx={{ backgroundImage: `url(${bgImage})` }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={10}
          md={7}
          lg={6}
          xl={4}
          ml={{ xs: "auto", lg: 6 }}
          mr={{ xs: "auto", lg: 6 }}
        >
          <MKBox
            bgColor="white"
            borderRadius="xl"
            shadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={{ xs: 20, sm: 18, md: 20 }}
            mb={{ xs: 20, sm: 18, md: 20 }}
            mx={3}
          >
            <MKBox
              variant="gradient"
              bgColor="dark"
              coloredShadow="dark"
              borderRadius="lg"
              p={2}
              mx={2}
              mt={-3}
            >
              <MKTypography variant="h3" color="white">
                {string.contactWindow.title}
              </MKTypography>
            </MKBox>
            <MKBox p={3}>
              <MKTypography variant="body2" color="text" mb={3}>
	  	{string.contactWindow.text}
              </MKTypography>
              <MKBox width="100%" component="form" method="post" autocomplete="off">
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      variant="standard"
                      label={string.contactWindow.fields.name}
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      type="email"
                      variant="standard"
                      label={string.contactWindow.fields.email}
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <MKInput
                      variant="standard"
                      label={string.contactWindow.fields.message}
                      placeholder={string.contactWindow.fields.messagePlaceholder}
                      InputLabelProps={{ shrink: true }}
                      multiline
                      fullWidth
                      rows={6}
                    />
                  </Grid>
                </Grid>
                <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                  <MKButton type="submit" variant="gradient" color="dark">
                    {string.contactWindow.submit}
                  </MKButton>
                </Grid>
              </MKBox>
            </MKBox>
          </MKBox>
        </Grid>
      </Grid>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default ContactUs;