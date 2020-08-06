import React from "react";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import {birdClasses} from "./BirdsData";

export const MainMenu = () => {

  return(
    <Tabs
      value={0}
      indicatorColor="primary"
      textColor="primary"
      //onChange={handleChange}
      aria-label="disabled tabs example"
      centered
    >
      <Tab label="Active"/>
      <Tab label="Disabled"/>
      <Tab label="Active"/>
    </Tabs>
  )
}
