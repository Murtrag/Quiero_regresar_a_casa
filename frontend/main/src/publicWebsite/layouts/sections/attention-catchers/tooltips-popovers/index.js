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

// Sections components
import BaseLayout from "publicWebsite/layouts/sections/components/BaseLayout";
import View from "publicWebsite/layouts/sections/components/View";

// Tooltips and popovers page components
import Popovers from "publicWebsite/layouts/sections/attention-catchers/tooltips-popovers/components/Popovers";
import Tooltips from "publicWebsite/layouts/sections/attention-catchers/tooltips-popovers/components/Tooltips";

// Tooltips and popovers page components code
import popoversCode from "publicWebsite/layouts/sections/attention-catchers/tooltips-popovers/components/Popovers/code";
import tooltipsCode from "publicWebsite/layouts/sections/attention-catchers/tooltips-popovers/components/Tooltips/code";

function TooltipsPopovers() {
  return (
    <BaseLayout
      title="Tooltip & Popovers"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/attention-catchers/tooltips-popovers" },
        { label: "Tooltip & Popovers" },
      ]}
    >
      <View title="Popovers" code={popoversCode}>
        <Popovers />
      </View>
      <View title="Tooltips" code={tooltipsCode}>
        <Tooltips />
      </View>
    </BaseLayout>
  );
}

export default TooltipsPopovers;
