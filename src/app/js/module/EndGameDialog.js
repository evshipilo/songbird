import React, {useContext} from "react";
import {observer} from "mobx-react";
import {StoreContext} from "./Store";
import DialogContentText from "@material-ui/core/DialogContentText";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

export const EndGameDialog = observer(() => {
  const store = useContext(StoreContext)

  const content = store.score === 30 ?
    'Игра окончена. Вы набрали максимальное количество баллов! Поздравляю, вы отлично разбираетесь в рок-музыке!'
    :
    `Игра окончена. Вы набрали ${store.score} баллов из 30. Попробуйте ещё раз.`
  return (
    <Dialog
      open={store.showModal}
      //onClose={() => store.setShowModal(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
       {content}
      </DialogTitle>
      <DialogActions>
        <Button onClick={() => store.nextGame()} color="primary" autoFocus>
          НОВАЯ ИГРА
        </Button>
      </DialogActions>
    </Dialog>

  )

})
