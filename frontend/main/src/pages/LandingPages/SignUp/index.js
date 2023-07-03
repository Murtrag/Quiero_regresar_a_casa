import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import { b_signUpURL, f_signUpURL } from "urls";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Image
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

//
import SweetAlert2 from 'react-sweetalert2';

// Validators
import { 
	validateLogin,
	validatePassword,
	validateEmail,
	validateName,
	validatePhoneNumber,
	validateEquality,
	combineValidators
} from "./validators/index";

// Custom Styles
import "assets/customCSS/signUp.css";


function SignUp() {

  const [swalProps, setSwalProps] = useState({});

  const [acceptTerms, setAcceptTerms] = useState(false);
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [repeatEmail, setRepeatEmail] = useState('');
  // const [emailMatch, setEmailMatch] = useState(true);
  const [pass, setPass] = useState('');
  const [repeatPass, setRepeatPass] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [profileDescription, setProfileDescription] = useState('');

  const handleSubmit = async (e) => {
	e.preventDefault();
	setSwalProps({ show: false })

	try {
		const response = await fetch(b_signUpURL(), {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: login,
				email: email,
				password: pass,
				first_name: firstName,
				last_name: lastName,
				phone_number: phoneNumber,
				profile_description: profileDescription
			})
		});

		if (response.ok) {
			setSwalProps({
				show: true,
				title: 'Registration success',
				text: `You registered successfully, the registration requires also email confirmation`,
				icon: 'success',
				button: "Resend conirmation email",
				showCancelButton: true,
				confirmButtonText: "Ok",
				cancelButtonText: "Resend confirmation email"
			});
			// window.location.href = '/';
		} else {
			// Error handle if refused by server
			response.json().then(data=>{
				setSwalProps({
					show: true,
					title: 'Registration error',
					text: `error: ${JSON.stringify(data)}`,
					icon: 'error'
				}).then(function(){
					// function when confirm button clicked
				}, function(dismiss){
					if(dismiss == 'cancel'){
						// function when cancel button is clicked
						console.log('resend email')
					}
				})
			})
			console.log(response);
		}
	} catch (error) {
			setSwalProps({
				show: true,
				title: 'Registration error',
				text: `error: `,
				icon: 'error'
			});
	}
  };

  const handleSetAcceptTerms = () => setAcceptTerms(!acceptTerms);

  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: f_signUpURL(),
          label: "Sign Up",
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
                Register
              </MKTypography>
            </MKBox>
            <MKBox p={3}>
           <MKBox width="100%" component="form" onSubmit={handleSubmit} method="post" autocomplete="off">
  <Grid container spacing={3}>
    <Grid item xs={12} md={12}>
      <MKInput
        variant="standard"
        label="Login"
	tabindex="1"
	className={validateLogin(login)? "inputCorrect":"inputIncorrect"}
        InputLabelProps={{ shrink: true }}
	onChange={e=>setLogin(e.target.value)}
        fullWidth
      />
    </Grid>
    <Grid item xs={12} md={6}>
      <MKInput
        type="email"
        variant="standard"
        label="Email"
	className={combineValidators(
		validateEquality(email, repeatEmail),
		validateEmail(email)
		)? "inputCorrect":"inputIncorrect" 
	}
        InputLabelProps={{ shrink: true }}
	onChange={(e) => setEmail(e.target.value)}

        fullWidth
      />
      <MKInput
        type="password"
        variant="standard"
        label="Password"
	className={combineValidators(
		validateEquality(pass, repeatPass),
		validatePassword(pass)
		)? "inputCorrect":"inputIncorrect" 
	}
        InputLabelProps={{ shrink: true }}
	onChange={e=>setPass(e.target.value)}
        fullWidth
      />
    </Grid>
    <Grid item xs={12} md={6}>
      <MKInput
        type="email"
        variant="standard"
        label="Repeat email"
	className={combineValidators(
		validateEquality(email, repeatEmail),
		validateEmail(repeatEmail)
		)? "inputCorrect":"inputIncorrect" 
	}
        InputLabelProps={{ shrink: true }}
	onChange={(el)=>setRepeatEmail(el.target.value) }
        fullWidth
      />
      <MKInput
        type="password"
        variant="standard"
        label="Repeat password"
	className={combineValidators(
		validateEquality(pass, repeatPass),
		validatePassword(repeatPass)
		)? "inputCorrect":"inputIncorrect" 
	}
        InputLabelProps={{ shrink: true }}
	onChange={(el)=>setRepeatPass(el.target.value) }
        fullWidth
      />
    </Grid>
    <Grid item xs={12} md={6}>
      <MKInput
        variant="standard"
        label="First Name(s)"
	className={ validateName(firstName)? "inputCorrect":"inputIncorrect" }
        InputLabelProps={{ shrink: true }}
	onChange={e=>setFirstName(e.target.value)}
        fullWidth
      />
    </Grid>
    <Grid item xs={12} md={6}>
      <MKInput
        variant="standard"
        label="Last Name(s)"
	className={ validateName(lastName)? "inputCorrect":"inputIncorrect" }
        InputLabelProps={{ shrink: true }}
	onChange={e=>setLastName(e.target.value)}
        fullWidth
      />
    </Grid>
    <Grid item xs={12}>
      <MKInput
        variant="standard"
        label="Phone number"
	className={ validatePhoneNumber(phoneNumber)? "inputCorrect":"inputIncorrect" }
        InputLabelProps={{ shrink: true }}
	onChange={e=>setPhoneNumber(e.target.value)}
        fullWidth
      />
      <MKInput
        variant="standard"
        label="Profile description"
        placeholder="Here you can put optional description to your profile"
        InputLabelProps={{ shrink: true }}
	onChange={e=>setProfileDescription(e.target.value)}
        multiline
        fullWidth
        rows={6}
      />
    </Grid>
  </Grid>
	  <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                  <MKBox display="flex" alignItems="center" ml={-1}>
                    <Switch checked={acceptTerms} onChange={handleSetAcceptTerms} />
                    <MKTypography
                      variant="button"
                      fontWeight="regular"
                      color="text"
                      onClick={handleSetAcceptTerms}
                      sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                    >
                      &nbsp;&nbsp;Accept the terms and conditions
                    </MKTypography>
                  </MKBox>
	  </Grid>
  <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
    <MKButton type="submit" variant="gradient" color="dark">
      Register
    </MKButton>
  </Grid>
</MKBox>

            </MKBox>
          </MKBox>
        </Grid>
      </Grid>
<SweetAlert2 {...swalProps} />
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
	  </MKBox>
    </>
  );
}

export default SignUp;
