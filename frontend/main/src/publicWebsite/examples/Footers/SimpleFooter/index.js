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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "publicWebsite/components/MKBox";
import MKTypography from "publicWebsite/components/MKTypography";

// Material Kit 2 React base styles
import typography from "assets/theme/base/typography";

import {useEffect, useState} from "react";
import { backendURL, b_footerURL } from "urls"
import { connect } from "react-redux";

import { getElementAtIndex } from "utils/getElement";
import string from "strings/footer";

function SimpleFooter({ company, links, light, locale }) {
// function SimpleFooter({ brand, socials, menus, copyright, locale }) {
  const { href, name } = company;
  const { size } = typography;
  let [state, setState] = useState({
		brand: [],
		socials: [],
		menus: [],
		copyright: [],
	}) ;

  useEffect(()=>{
		fetch(b_footerURL({
			country: locale.country,
			language: locale.language,
		})).then(response=>response.json())
			.then((state)=>{
				setState({
					...state,
					state
				})
			})
  }, [locale])

  const renderLinks = () =>
	getElementAtIndex(
		state.menus,
		0,
		{items:[]}
	).items.map((link, key) => (

      <MKBox
        key={link.name}
        component="li"
        pl={key === 0 ? 0 : 2}
        pr={key === links.length - 1 ? 0 : 2}
        lineHeight={1}
      >
        <Link href={link.href} target="_blank">
          <MKTypography variant="button" fontWeight="regular" color={light ? "white" : "text"}>
            {link.name}
          </MKTypography>
        </Link>
      </MKBox>
    ));

  return (
    <Container>
      <MKBox
        width="100%"
        display="flex"
        flexDirection={{ xs: "column", lg: "row" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <MKBox
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          color={light ? "white" : "text"}
          fontSize={size.sm}
        >
	  {string.simpleFooter.copyright(new Date().getFullYear())}
        </MKBox>
        <MKBox
          component="ul"
          sx={({ breakpoints }) => ({
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            listStyle: "none",
            mt: 3,
            mb: 0,
            p: 0,

            [breakpoints.up("lg")]: {
              mt: 0,
            },
          })}
        >
          {renderLinks()}
        </MKBox>
      </MKBox>
    </Container>
  );
}

// Setting default values for the props of SimpleFooter
SimpleFooter.defaultProps = {
  company: { href: "https://www.quiero-regresar.mx/", name: "Quiero-Regresar" },
  links: [
    { href: "https://www.quiero-regresar.mx/", name: "Quiero-Regresar" },
    { href: "https://www.quiero-regresar.mx/", name: "About us" },
    { href: "https://www.quiero-regresar.mx/", name: "Blog" },
    { href: "https://www.quiero-regresar.mx/", name: "License" },
  ],
  light: false,
};

// Typechecking props for the SimpleFooter
SimpleFooter.propTypes = {
  company: PropTypes.objectOf(PropTypes.string),
  links: PropTypes.arrayOf(PropTypes.object),
  light: PropTypes.bool,
};

// export default SimpleFooter;
const mapStateToProps = state => ({
	locale: state.localeReducer
})

export default connect(mapStateToProps)(SimpleFooter);
