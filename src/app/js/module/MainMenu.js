import React, {useContext} from "react";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import {StoreContext} from "./Store";
import {observer} from "mobx-react";
import {songClasses} from "./SongsData";

export const MainMenu = observer(() => {
  const store = useContext(StoreContext)
  const myTabs = songClasses.map((songClass, number) =>
    <Tab
      key={songClass}
      label={songClass}
      />
  )

  return (
    <Tabs
      className='bird-classes-tabs'
      variant='scrollable'
      value={store.birdsClass}
      indicatorColor="primary"
      textColor="primary"
      aria-label="disabled tabs example"
    >
      {myTabs}
    </Tabs>
  )
})
