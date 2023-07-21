import { useState } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Kit 2 React components
import MKBox from "publicWebsite/components/MKBox";
import MKTypography from "publicWebsite/components/MKTypography";
import MKInput from "publicWebsite/components/MKInput";
import MKButton from "publicWebsite/components/MKButton";

// Material Kit 2 React example components
import DefaultNavbar from "publicWebsite/examples/Navbars/DefaultNavbar";
import SimpleFooter from "publicWebsite/examples/Footers/SimpleFooter";
// import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";

// Material Kit 2 React page layout routes
import routes from "publicWebsite/routes";
import { b_tokenURL, f_signUpURL, f_dashboardURL } from "urls";
import SignUp from "publicWebsite/pages/LandingPages/SignUp/index"
import string from "strings/signIn";
import SweetAlert2 from 'react-sweetalert2';
import Swal from "sweetalert2";

// Images
import bgImage from "assets/images/bg-presentation.jpg";
import "assets/customCSS/signIn.css";

import { extractPath } from "utils/extractPath";
import { 
	validateLogin,
	validatePassword,
} from "utils/validators/index";

function SignInBasic() {
  const navigate = useNavigate();


  const [swalProps, setSwalProps] = useState({});
  const [rememberMe, setRememberMe] = useState(false);

  const [username, setLoginInputValue] = useState('');
  const [password, setPasswordInputValue] = useState('');

  const handleSubmit = async (e) => {
	e.preventDefault();

	try {
		const response = await fetch(b_tokenURL(), {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ username, password }),
			credentials: 'include',
		});

		if (response.ok) {
			localStorage.clear();

			const {access, refresh} = await response.json();

			localStorage.setItem('access_token', access);
			localStorage.setItem('refresh_token', refresh);
			Swal.fire({
				title: string.messageSuccess.title ,
				text: string.messageSuccess.text,
				icon: 'success',
				button: string.messageSuccess.confirmButtonText,
			}).then(el=>{
				navigate(extractPath(f_dashboardURL()));
			});

		} else {
			response.json().then(data=>{
				Swal.fire({
					title: string.messageErrors.serverError.title,
					text: string.messageErrors.serverError.text(JSON.stringify(data)),
					icon: 'error'
				})
			})
		}
	} catch (error) {
			Swal.fire({
				show: true,
				title: string.messageErrors.syntaxError.title,
				text: string.messageErrors.syntaxError.text,
				icon: 'error'
			});
	}
  };

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: extractPath(f_signUpURL()),
          label: string.navBar.button,
          color: "dark",
        }}
        transparent
        light
      />
      <MKBox
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        width="100%"
        minHeight="100vh"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <MKBox px={1} width="100%" height="100vh" mx="auto" position="relative" zIndex={2}>
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card>
              <MKBox
                variant="gradient"
                bgColor="dark"
                borderRadius="lg"
                coloredShadow="dark"
                mx={2}
                mt={-3}
                p={2}
                mb={1}
                textAlign="center"
              >
                <MKTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                  {string.loginWindow.title}
                </MKTypography>
                <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
                  <Grid item xs={2}>
                    <MKTypography component={MuiLink} href="#" variant="body1" color="white">
                      <FacebookIcon color="inherit" />
                    </MKTypography>
                  </Grid>
                  <Grid item xs={2}>
                    <MKTypography component={MuiLink} href="#" variant="body1" color="white">
                      <GitHubIcon color="inherit" />
                    </MKTypography>
                  </Grid>
                  <Grid item xs={2}>
                    <MKTypography component={MuiLink} href="#" variant="body1" color="white">
                      <GoogleIcon color="inherit" />
                    </MKTypography>
                  </Grid>
                </Grid>
              </MKBox>
              <MKBox pt={4} pb={3} px={3}>
                <MKBox component="form" onSubmit={handleSubmit} role="form">
                  <MKBox mb={2}>

                    <MKInput
			  type="text"
			  className={ validateLogin(username)? "inputCorrect":"inputIncorrect" }
			  onChange={e=>setLoginInputValue(e.target.value)}
			  label={string.loginWindow.fields.login}
		  fullWidth />

                  </MKBox>
                  <MKBox mb={2}>

                    <MKInput
			  type="password"
			  className={ validatePassword(password)? "inputCorrect":"inputIncorrect" }
			  onChange={e=>setPasswordInputValue(e.target.value) }
			    label={string.loginWindow.fields.password}
		  fullWidth />

                  </MKBox>
                  <MKBox display="flex" alignItems="center" ml={-1}>
                    <Switch checked={rememberMe} onChange={handleSetRememberMe} />
                    <MKTypography
                      variant="button"
                      fontWeight="regular"
                      color="text"
                      onClick={handleSetRememberMe}
                      sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                    >
                      &nbsp;&nbsp;{string.loginWindow.fields.rememberMe}
                    </MKTypography>
                  </MKBox>
                  <MKBox mt={4} mb={1}>
                    <MKButton type="submit" variant="gradient" color="dark" fullWidth>
	  {string.loginWindow.button} 
                    </MKButton>
                  </MKBox>
                  <MKBox mt={3} mb={1} textAlign="center">
                    <MKTypography variant="button" color="text">
	  {string.loginWindow.message}{" "}
                      <MKTypography
			component={Link}
                        to={extractPath(f_signUpURL())}
                        variant="button"
                        color="dark"
                        fontWeight="medium"
                        textGradient
                      >
	  {string.loginWindow.messageButton}
                      </MKTypography>
                    </MKTypography>
                  </MKBox>
                </MKBox>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </MKBox>
	<SweetAlert2 {...swalProps} />
      <MKBox width="100%" position="absolute" zIndex={2} bottom="1.625rem">
	  <SimpleFooter light /> 
      </MKBox>
    </>
  );
}

export default SignInBasic;
