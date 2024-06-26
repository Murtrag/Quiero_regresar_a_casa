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

/** 
  All of the routes for the Material Kit 2 React React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/

// @mui material components
import Icon from "@mui/material/Icon";

// @mui icons
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

// Pages
import AboutUs from "publicWebsite/layouts/pages/landing-pages/about-us";
import ContactUs from "publicWebsite/layouts/pages/landing-pages/contact-us";
import Author from "publicWebsite/layouts/pages/landing-pages/author";
import SignIn from "publicWebsite/layouts/pages/authentication/sign-in";
//@TODO here import registration page 

// Sections
import PageHeaders from "publicWebsite/layouts/sections/page-sections/page-headers";
import Features from "publicWebsite/layouts/sections/page-sections/featuers";
import Navbars from "publicWebsite/layouts/sections/navigation/navbars";
import NavTabs from "publicWebsite/layouts/sections/navigation/nav-tabs";
import Pagination from "publicWebsite/layouts/sections/navigation/pagination";
import Inputs from "publicWebsite/layouts/sections/input-areas/inputs";
import Forms from "publicWebsite/layouts/sections/input-areas/forms";
import Alerts from "publicWebsite/layouts/sections/attention-catchers/alerts";
import Modals from "publicWebsite/layouts/sections/attention-catchers/modals";
import TooltipsPopovers from "publicWebsite/layouts/sections/attention-catchers/tooltips-popovers";
import Avatars from "publicWebsite/layouts/sections/elements/avatars";
import Badges from "publicWebsite/layouts/sections/elements/badges";
import BreadcrumbsEl from "publicWebsite/layouts/sections/elements/breadcrumbs";
import Buttons from "publicWebsite/layouts/sections/elements/buttons";
import Dropdowns from "publicWebsite/layouts/sections/elements/dropdowns";
import ProgressBars from "publicWebsite/layouts/sections/elements/progress-bars";
import Toggles from "publicWebsite/layouts/sections/elements/toggles";
import Typography from "publicWebsite/layouts/sections/elements/typography";

const routes = [
  {
    name: "Panel:",
    icon: <Icon>apps</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "landing pages",
        collapse: [
          {
            name: "about us",
            route: "/pages/landing-pages/about-us",
            component: <AboutUs />,
          },
          {
            name: "contact us",
            route: "/pages/landing-pages/contact-us",
            component: <ContactUs />,
          },
          {
            name: "author",
            route: "/pages/landing-pages/author",
            component: <Author />,
          },
        ],
      },
      {
        name: "account",
        collapse: [
          {
            name: "sign in",
            route: "/pages/authentication/sign-in",
            component: <SignIn />,
          },
        ],
      },
    ],
  },
  {
    name: "sections",
    icon: <Icon>view_day</Icon>,
    collapse: [
      {
        name: "page sections",
        description: "See all sections",
        dropdown: true,
        collapse: [
          {
            name: "page headers",
            route: "/sections/page-sections/page-headers",
            component: <PageHeaders />,
          },
          {
            name: "features",
            route: "/sections/page-sections/features",
            component: <Features />,
          },
        ],
      },
      {
        name: "navigation",
        description: "See all navigations",
        dropdown: true,
        collapse: [
          {
            name: "navbars",
            route: "/sections/navigation/navbars",
            component: <Navbars />,
          },
          {
            name: "nav tabs",
            route: "/sections/navigation/nav-tabs",
            component: <NavTabs />,
          },
          {
            name: "pagination",
            route: "/sections/navigation/pagination",
            component: <Pagination />,
          },
        ],
      },
      {
        name: "input areas",
        description: "See all input areas",
        dropdown: true,
        collapse: [
          {
            name: "inputs",
            route: "/sections/input-areas/inputs",
            component: <Inputs />,
          },
          {
            name: "forms",
            route: "/sections/input-areas/forms",
            component: <Forms />,
          },
        ],
      },
      {
        name: "attention catchers",
        description: "See all examples",
        dropdown: true,
        collapse: [
          {
            name: "alerts",
            route: "/sections/attention-catchers/alerts",
            component: <Alerts />,
          },
          {
            name: "modals",
            route: "/sections/attention-catchers/modals",
            component: <Modals />,
          },
          {
            name: "tooltips & popovers",
            route: "/sections/attention-catchers/tooltips-popovers",
            component: <TooltipsPopovers />,
          },
        ],
      },
      {
        name: "elements",
        description: "See all 32 examples",
        dropdown: true,
        collapse: [
          {
            name: "avatars",
            route: "/sections/elements/avatars",
            component: <Avatars />,
          },
          {
            name: "badges",
            route: "/sections/elements/badges",
            component: <Badges />,
          },
          {
            name: "breadcrumbs",
            route: "/sections/elements/breadcrumbs",
            component: <BreadcrumbsEl />,
          },
          {
            name: "buttons",
            route: "/sections/elements/buttons",
            component: <Buttons />,
          },
          {
            name: "dropdowns",
            route: "/sections/elements/dropdowns",
            component: <Dropdowns />,
          },
          {
            name: "progress bars",
            route: "/sections/elements/progress-bars",
            component: <ProgressBars />,
          },
          {
            name: "toggles",
            route: "/sections/elements/toggles",
            component: <Toggles />,
          },
          {
            name: "typography",
            route: "/sections/elements/typography",
            component: <Typography />,
          },
        ],
      },
    ],
  },
  {
    name: "organization",
    icon: <Icon>business</Icon>,
    collapse: [
      {
        name: "getting started",
        description: "All about overview, quick start, license and contents",
        href: "https://www.creative-tim.com/learning-lab/react/quick-start/material-kit/",
      },
      {
        name: "foundation",
        description: "See our colors, icons and typography",
        href: "https://www.creative-tim.com/learning-lab/react/colors/material-kit/",
      },
      {
        name: "components",
        description: "Explore our collection of fully designed components",
        href: "https://www.creative-tim.com/learning-lab/react/alerts/material-kit/",
      },
      {
        name: "plugins",
        description: "Check how you can integrate our plugins",
        href: "https://www.creative-tim.com/learning-lab/react/datepicker/material-kit/",
      },
    ],
  },
  {
    name: "articles",
    icon: <Icon>article</Icon>,
    collapse: [
      {
        name: "getting started",
        description: "All about overview, quick start, license and contents",
        href: "https://www.creative-tim.com/learning-lab/react/quick-start/material-kit/",
      },
      {
        name: "foundation",
        description: "See our colors, icons and typography",
        href: "https://www.creative-tim.com/learning-lab/react/colors/material-kit/",
      },
      {
        name: "components",
        description: "Explore our collection of fully designed components",
        href: "https://www.creative-tim.com/learning-lab/react/alerts/material-kit/",
      },
      {
        name: "plugins",
        description: "Check how you can integrate our plugins",
        href: "https://www.creative-tim.com/learning-lab/react/datepicker/material-kit/",
      },
    ],
  },
  {
    name: "Support us",
    icon: <VolunteerActivismIcon  />,
    href: "https://www.github.com/creativetimofficial/material-kit-react",
  },
];

export default routes;
