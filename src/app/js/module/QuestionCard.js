import React, {useContext} from "react";
import {observer} from "mobx-react";
import {StoreContext} from "./Store";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import question from '../../img/question.svg'
import {SongsData} from "./SongsData";

export const QuestionCard = observer(() => {
  const store=useContext(StoreContext)
  const url='https://raw.githubusercontent.com/evshipilo/soundFoundDATA/master/'
  return (
    <div className='question-card'>
      <div className='question-image'>
        {store.isRightAnswer?
          <img src={url+SongsData[store.songClass][store.rightAnswer]?.image} alt="img"/>
          :
          <img src={question} alt="question"/>
        }
      </div>
      <div className='question-audio'>
        {store.isRightAnswer?
          <h1>{SongsData[store.songClass][store.rightAnswer]?.name}</h1>
        :
          <h1>***</h1>
        }
        <AudioPlayer
          className='question-audio-player'
          showJumpControls={false}
          src={url+SongsData[store.songClass][store.rightAnswer]?.audio}
          onPlay={e => console.log("onPlay")}
          // other props here
        />

      </div>
    </div>

  )
})
