// @mui material components
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Image
import bgImage from "assets/images/illustrations/illustration-reset.jpg";

function SignUp() {
  return (
    <>
      <MKBox position="fixed" top="0.5rem" width="100%">
        <DefaultNavbar
          routes={routes}
          action={{
            type: "external",
            route: "https://www.creative-tim.com/product/material-kit-react",
            label: "Sign In",
            color: "dark",
          }}
        />
      </MKBox>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} lg={6}>
          <MKBox
            display={{ xs: "none", lg: "flex" }}
            width="calc(100% - 2rem)"
            height="calc(100vh - 2rem)"
            borderRadius="lg"
            ml={2}
            mt={2}
            sx={{ backgroundImage: `url(${bgImage})` }} {/* Is this a left crap? */}
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
                Register
              </MKTypography>
            </MKBox>
            <MKBox p={3}>
           <MKBox width="100%" component="form" method="post" autocomplete="off">
  <Grid container spacing={3}>
    <Grid item xs={12} md={6}>
      <MKInput
        variant="standard"
        label="Login"
        InputLabelProps={{ shrink: true }}
        fullWidth
      />
    </Grid>
    <Grid item xs={12} md={6}>
      <MKInput
        type="password"
        variant="standard"
        label="Password"
        InputLabelProps={{ shrink: true }}
        fullWidth
      />
      <MKInput
        type="password"
        variant="standard"
        label="Repeat password"
        InputLabelProps={{ shrink: true }}
        fullWidth
      />
    </Grid>
    <Grid item xs={12} md={6}>
      <MKInput
        type="email"
        variant="standard"
        label="Email"
        InputLabelProps={{ shrink: true }}
        fullWidth
      />
      <MKInput
        type="email"
        variant="standard"
        label="Repeat email"
        InputLabelProps={{ shrink: true }}
        fullWidth
      />
    </Grid>
    <Grid item xs={12} md={6}>
      <MKInput
        variant="standard"
        label="First Name(s)"
        InputLabelProps={{ shrink: true }}
        fullWidth
      />
      <MKInput
        variant="standard"
        label="Last Name(s)"
        InputLabelProps={{ shrink: true }}
        fullWidth
      />
    </Grid>
    <Grid item xs={12} md={6}>
      <MKInput
        variant="standard"
        label="Phone number"
        InputLabelProps={{ shrink: true }}
        fullWidth
      />
    </Grid>
    <Grid item xs={12}>
      <MKInput
        variant="standard"
        label="Profile description"
        placeholder="Here you can put optional description to your profile"
        InputLabelProps={{ shrink: true }}
        multiline
        fullWidth
        rows={6}
      />
    </Grid>
  </Grid>
  <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
    <MKButton type="submit" variant="gradient" color="dark">
      Register
    </MKButton>
  </Grid>
  <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                  <MKBox display="flex" alignItems="center" ml={-1}>
                    <Switch checked={rememberMe} onChange={handleSetRememberMe} />
                    <MKTypography
                      variant="button"
                      fontWeight="regular"
                      color="text"
                      onClick={handleSetRememberMe}
                      sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                    >
                      &nbsp;&nbsp;Remember me
                    </MKTypography>
                  </MKBox>
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

export default SignUp;
