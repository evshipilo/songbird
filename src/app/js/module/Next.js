import React, {useContext} from "react";
import {Button} from "@material-ui/core";
import {observer} from "mobx-react";
import {StoreContext} from "./Store";

export const Next = observer(() => {
  const store = useContext(StoreContext)
  return (
    store.isRightAnswer ?
      <Button
        variant="contained"
        color="primary"
        onClick={()=>store.nextRound()}
      >
        Next
      </Button>
      :
      <Button
        variant="contained"
        disabled
      >
        Next
      </Button>
  )


})
