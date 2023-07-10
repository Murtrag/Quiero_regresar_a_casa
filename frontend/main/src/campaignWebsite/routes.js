/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "campaignWebsite/views/Dashboard";
import UserProfile from "campaignWebsite/views/UserProfile";
import TableList from "campaignWebsite/views/TableList";
import Typography from "campaignWebsite/views/Typography";
import Icons from "campaignWebsite/views/Icons";
import Maps from "campaignWebsite/views/Maps";
import Notifications from "campaignWebsite/views/Notifications";
import Upgrade from "campaignWebsite/views/Upgrade";
import {frontendURL} from "urls";

import string from "strings/dashboard_routes";

const dashboardRoutes = [
  {
    upgrade: true,
    path: "/../",
    name: string.sidebar.bottomButton,
    icon: "nc-icon nc-stre-left",
    component: Upgrade,
    layout: "/admin"
  },
  {
    path: "/dashboard",
    name: string.sidebar.dashboard,
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/user",
    name: string.sidebar.userProfile,
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/table",
    name: string.sidebar.myInvestigations,
    icon: "nc-icon nc-zoom-split",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: string.sidebar.promotions,
    icon: "nc-icon nc-notification-70",
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: string.sidebar.notifications,
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: string.sidebar.securitySettings,
    icon: "nc-icon nc-settings-90",
    component: Maps,
    layout: "/admin"
  },
];

export default dashboardRoutes;
