import React, {useContext} from "react";
import {observer} from "mobx-react";
import {StoreContext} from "./Store";
import DialogContentText from "@material-ui/core/DialogContentText";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

export const EndGameDialog = observer(() => {
  const store=useContext(StoreContext)

  return(
    <Dialog
      open={store.showModal}
      onClose={()=>store.setShowModal(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Let Google help apps determine location. This means sending anonymous location data to
          Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={()=>store.nextGame()} color="primary" autoFocus>
          NEW GAME
        </Button>
      </DialogActions>
    </Dialog>

  )

})
