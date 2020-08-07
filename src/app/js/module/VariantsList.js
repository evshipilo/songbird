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

  useEffect(()=>store.setRightAnswer(),[])

  const myList = SongsData[store.songClass].map((author, num) =>
    <>
      <ListItem
        key={author.name}
        button
      onClick={()=>store.addToArrayOfAnswers(num)}
      >
        {store.arrayOfAnswers.includes(num)?
          num===store.rightAnswer? <span key={author.name+'c'}>green</span>:<span key={author.name+'c'}>red</span>
          :
          <span key={author.name+'c'}>grey</span>

        }
        <ListItemText
          key={author.name+'a'}
          primary={author.name}/>
      </ListItem>
      {num === SongsClass.length - 1 ? null : <Divider key={author.name+'b'} light/>}
    </>
  )
  return (
    <List component="nav" aria-label="mailbox folders">
      {myList}
    </List>
  )
})
