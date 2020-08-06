import React, {useContext} from "react";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import {birdClasses} from "./BirdsData";
import {StoreContext} from "./Store";
import {observer} from "mobx-react";

export const MainMenu = observer(() => {
  const store = useContext(StoreContext)
  const myTabs = birdClasses.map((birdClass, number) =>
    <Tab
      key={birdClass}
      label={birdClass}
      onClick={() => store.changeTab(number)}/>
  )
  return (
    <Tabs
      value={store.tabValue}
      indicatorColor="primary"
      textColor="primary"
      aria-label="disabled tabs example"
      centered
    >
      {myTabs}
    </Tabs>
  )
})
