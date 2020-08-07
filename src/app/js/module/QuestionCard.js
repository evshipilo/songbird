import React, {useContext} from "react";
import {observer} from "mobx-react";
import {StoreContext} from "./Store";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export const QuestionCard = observer(() => {
  const store=useContext(StoreContext)
  return (
    <div className='question-card'>
      <div className='question-image'>
        <img src="https://raw.githubusercontent.com/evshipilo/soundFoundDATA/master/Blur.jpg" alt="img"/>
      </div>
      <div>
        <h2>***</h2>
      </div>
    </div>

  )
})
