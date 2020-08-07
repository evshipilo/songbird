import React, {useContext, useEffect} from "react";
import {observer} from "mobx-react";
import {SongsClass, SongsData} from "./SongsData";
import {StoreContext} from "./Store";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";

export const VariantsList = observer(() => {
  const store = useContext(StoreContext)

  useEffect(() => store.setRightAnswer(), [])
  console.log("-> store.rightAnswer", store.rightAnswer);
  console.log("-> store", store.arrayOfAnswers);

  const myList = SongsData[store.songClass].map((author, num) =>
    <div key={author.name}>
      <ListItem
        button
        onClick={store.isRightAnswer ?
          () => store.setClickedListItem(num)
          :
          () => {
            store.addToArrayOfAnswers(num)
            store.setClickedListItem(num)
          }
        }
      >
        {store.arrayOfAnswers.includes(num) ?
          num === store.rightAnswer ? <span>green</span> : <span>red</span>
          :
          <span>grey</span>

        }
        <ListItemText
          primary={author.name}/>
      </ListItem>
      {num === SongsClass.length - 1 ? null :
        <Divider key={author.name + 'b'} light/>}
    </div>
  )
  return (
    <List component="nav" aria-label="mailbox folders">
      {myList}
    </List>
  )
})
