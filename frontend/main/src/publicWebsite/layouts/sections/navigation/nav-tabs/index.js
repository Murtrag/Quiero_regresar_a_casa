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

// Material Kit 2 React components
import MKBox from "publicWebsite/components/MKBox";

// Sections components
import BaseLayout from "publicWebsite/layouts/sections/components/BaseLayout";
import View from "publicWebsite/layouts/sections/components/View";

// Stats page components
import TabsSimple from "publicWebsite/layouts/sections/navigation/nav-tabs/components/TabsSimple";

// Stats page components code
import tabsSimpleCode from "publicWebsite/layouts/sections/navigation/nav-tabs/components/TabsSimple/code";

function NavTabs() {
  return (
    <BaseLayout
      title="Nav Tabs"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/navigation/nav-tabs" },
        { label: "Nav Tabs" },
      ]}
    >
      <View title="Tabs simple" code={tabsSimpleCode}>
        <MKBox bgColor="white" py={6}>
          <TabsSimple />
        </MKBox>
      </View>
    </BaseLayout>
  );
}

export default NavTabs;
