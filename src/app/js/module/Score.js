import React, {Component, useContext} from "react";
import {StoreContext} from "./Store";
import {observer} from "mobx-react";

export const Score = observer(() => {
  const store = React.useContext(StoreContext)
  return (
    <span
      className='score'>
    Score:{` ${store.score}`}
  </span>
  )

})
