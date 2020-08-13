import React, {useContext} from "react";
import {observer} from "mobx-react";
import {StoreContext} from "./Store";
import {CSSTransition, SwitchTransition} from "react-transition-group";


export const Modal=observer(()=>{
  const store=useContext(StoreContext)
  return(
    <Modal
      open={store.modal}
      //onClose={handleClose}
      //aria-labelledby="simple-modal-title"
      //aria-describedby="simple-modal-description"
    >
      +++++

    </Modal>
  )
})
