import React, {useContext} from "react";
import {observer} from "mobx-react";
import {StoreContext} from "./Store";
import {SongsData} from "./SongsData";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export const AnswerCard = observer(() => {
    const store = useContext(StoreContext)
    const url = 'https://raw.githubusercontent.com/evshipilo/soundFoundDATA/master/'

    return (
      <div className='answer-card'>
        {store.clickedListItem === null ?
          <h3>прослушайте музыкальную композицию и выберите исполнителя</h3>
          :
          <>
          <div className='head-block'>
            <img
              src={url + SongsData[store.songClass][store.clickedListItem]?.image}
              alt="img"/>
            <AudioPlayer
              className='answer-audio-player'
              showJumpControls={false}
              src={url + SongsData[store.songClass][store.clickedListItem]?.audio}
              onPlay={e => console.log("onPlay")}
            />
          </div>
            <div className='description-block'>
              <h2>{SongsData[store.songClass][store.clickedListItem]?.name}</h2>
              <p>{SongsData[store.songClass][store.clickedListItem]?.description}</p>
            </div>
          </>
        }
      </div>

    )
  }
)
