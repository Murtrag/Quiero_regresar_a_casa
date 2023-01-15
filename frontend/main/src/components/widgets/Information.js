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

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

// Utils
import {findChild, findChildren } from "utils/findChild";

// <Information>
// 	<CardFront icon = "">
// 		<Title></Title>
// 		<Description></Description>
// 	</CardFront>
// 	<CardReverse icon = "">
// 			<Title></Title>
// 			<Description></Description>
// 	</CardReverse>
// 	<Items>
// 		<Item icon="" title="" description=""></Item>
// 		<Item icon="" title="" description=""></Item>
// 		<Item icon="" title="" description=""></Item>
// 	</Items>
// </Information>

function Information({children}) {
  const cardFront = findChild(children, "cardfront");
  const cardRevers = findChild(children, "cardreverse");
  const items = findChild(children, "items");

  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon={cardFront.props.icon}
                title={findChild(cardFront.props.children, "title").props.children}
                description={findChild(cardFront.props.children, "description").props.children}
              />
              <RotatingCardBack
                image={bgBack}
                title={findChild(cardRevers.props.children, "title").props.children}
                description={findChild(cardRevers.props.children, "description").props.children}
                // action={{
                //   type: "internal",
                //   route: "/sections/page-sections/page-headers",
                //   label: "start with header",
                // }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
	  {
		  findChildren(items.props.children, "item").map((child, i)=>(
		      <Grid item xs={12} md={6} key={i}>
			<DefaultInfoCard
			  icon={child.props.icon}
			  title={findChild(child.props.children, "title").props.children}
			  description={findChild(child.props.children, "desc").props.children}
			/>
		      </Grid>
		  ))
	  }
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
