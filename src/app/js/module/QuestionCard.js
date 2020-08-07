import React, {useContext} from "react";
import {observer} from "mobx-react";
import {StoreContext} from "./Store";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import question from '../../img/question.svg'
import {SongsData} from "./SongsData";

export const QuestionCard = observer(() => {
  const store=useContext(StoreContext)
  return (
    <div className='question-card'>
      <div className='question-image'>
        {store.rightAnswer?
          <img src="https://raw.githubusercontent.com/evshipilo/soundFoundDATA/master/Blur.jpg" alt="img"/>
          :
          <img src={question} alt="question"/>
        }
      </div>
      <div className='question-audio'>
        {store.rightAnswer?
          <h1>{SongsData[0][0].name}</h1>
        :
          <h1>***</h1>
        }
        <AudioPlayer
          className='question-audio-player'
          showJumpControls={false}
          src="https://raw.githubusercontent.com/evshipilo/soundFoundDATA/master/Fat Lip   Sum 41.mp3"
          onPlay={e => console.log("onPlay")}
          // other props here
        />

      </div>
    </div>

  )
})
