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
import MyInvestigations from "campaignWebsite/views/MyInvestigations/index";
import Typography from "campaignWebsite/views/Typography";
import Icons from "campaignWebsite/views/Icons";
import Maps from "campaignWebsite/views/Maps";
import Notifications from "campaignWebsite/views/Notifications";
import Upgrade from "campaignWebsite/views/Upgrade";
import { extractPath } from "utils/extractPath";

import {
	f_dashboardURL,
	f_userProfileURL,
	f_myInvestigationsURL,
	f_promotionsURL,
	f_notificationsURL,
	f_securitySettingsURL

} from "urls";

import string from "strings/dashboard_routes";

const convertToRoute = (url) => {
  const path = extractPath(url);
  const layout = "/"+path.split("/")[1];
  const routePath = "/"+path.substring(layout.length + 1);
  return { path: routePath, layout };
};

const dashboardRoutes = [
  {
    upgrade: true,
    path: "/../",
    name: string.sidebar.bottomButton,
    icon: "nc-icon nc-stre-left",
    component: Upgrade,
    layout: "/dashboard"
  },
  {
    // path: "/",
    name: string.sidebar.dashboard,
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    // layout: "/dashboard"
    ...convertToRoute(f_dashboardURL())
  },
  {
    name: string.sidebar.userProfile,
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    ...convertToRoute(f_userProfileURL())
  },
  {
    name: string.sidebar.myInvestigations,
    icon: "nc-icon nc-zoom-split",
    component: MyInvestigations,
    ...convertToRoute(f_myInvestigationsURL())
  },
  {
    name: string.sidebar.promotions,
    icon: "nc-icon nc-notification-70",
    component: Typography,
    ...convertToRoute(f_promotionsURL())
  },
  {
    name: string.sidebar.notifications,
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    ...convertToRoute(f_notificationsURL())
  },
  {
    name: string.sidebar.securitySettings,
    icon: "nc-icon nc-settings-90",
    component: Typography,
    ...convertToRoute(f_securitySettingsURL())
  },
];

export default dashboardRoutes;
