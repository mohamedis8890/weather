import React from "react";
import { Tab } from "semantic-ui-react";
import Main from "./Main";

export default function MainView() {
  // TODO: Add a loading indicator
  const panes = [
    {
      menuItem: "Main",
      render: () => (
        <Tab.Pane>
          <Main />
        </Tab.Pane>
      ),
    },
    { menuItem: "Forecasts", render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
    {
      menuItem: "Country Info and Maps",
      render: () => <Tab.Pane>Tab 3 Content</Tab.Pane>,
    },
  ];
  return <Tab panes={panes} />;
}
