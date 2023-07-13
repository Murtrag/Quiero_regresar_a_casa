// react-router-dom components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "publicWebsite/components/MKBox";
import MKTypography from "publicWebsite/components/MKTypography";

import {useEffect, useState} from 'react';
import { backendURL, b_footerURL } from "urls"
import { connect } from 'react-redux';


function DefaultFooter({ content, locale }) {
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

	const { socials, copyright } = content;
	let { menus, brand } = state;


	return (
		<MKBox component="footer">
		<Container>
		<Grid container spacing={3}>
		<Grid item xs={12} md={3} sx={{ ml: "auto", mb: 3 }}>
		<MKBox>
		<Link to={brand.route}>
		<MKBox component="img" src={backendURL + brand.image} alt={brand.name} maxWidth="2rem" mb={2} />
		</Link>
		<MKTypography color="white" variant="h6">{brand.name}</MKTypography>
		</MKBox>
		<MKBox display="flex" alignItems="center" mt={3}>
		{socials.map(({ icon, link }, key) => (
			<MKTypography
			key={link}
			component="a"
			href={link}
			target="_blank"
			rel="noreferrer"
			variant="h5"
			color="white"
			opacity={0.8}
			mr={key === socials.length - 1 ? 0 : 2.5}
			>
			{icon}
			</MKTypography>
		))}
		</MKBox>
		</Grid>
		{menus.map(({ name: title, items }) => (
			<Grid key={title} item xs={6} md={2} sx={{ mb: 3 }}>
			<MKTypography
			display="block"
			variant="button"
			fontWeight="bold"
			textTransform="capitalize"
			color="white"
			mb={1}
			>
			{title}
			</MKTypography>
			<MKBox component="ul" p={0} m={0} sx={{ listStyle: "none" }}>
			{items.map(({ name, route, href }) => (
				<MKBox key={name} component="li" p={0} m={0} lineHeight={1.25}>
				{href ? (
					<MKTypography
					component="a"
					href={href}
					target="_blank"
					rel="noreferrer"
					variant="button"
					fontWeight="regular"
					textTransform="capitalize"
					color="white"
					>
					{name}
					</MKTypography>
				) : (
					<MKTypography
					component={Link}
					to={route}
					variant="button"
					fontWeight="regular"
					textTransform="capitalize"
					color="white"
					>
					{name}
					</MKTypography>
				)}
				</MKBox>
			))}
			</MKBox>
			</Grid>
		))}
		<Grid item xs={12} sx={{ textAlign: "center", my: 3 }}>
		{copyright}
		</Grid>
		</Grid>
		</Container>
		</MKBox>
	);
}

// Typechecking props for the DefaultFooter
DefaultFooter.propTypes = {
	content: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.object, PropTypes.array])).isRequired,
};

const mapStateToProps = state => ({
	locale: state.localeReducer
})

export default connect(mapStateToProps)(DefaultFooter);
