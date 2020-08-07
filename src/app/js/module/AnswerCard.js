import React, {useContext} from "react";
import {observer} from "mobx-react";
import {StoreContext} from "./Store";

export const AnswerCard = observer(() => {
  const store=useContext(StoreContext)

  return(
<div className='answer-card'>




  {store.clickedListItem}
</div>


  )
  }
)
