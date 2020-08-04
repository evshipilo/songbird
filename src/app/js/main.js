import '../css/style.scss'
import Bird from '../img/bird.svg'
import React from "react"
import ReactDOM from 'react-dom'
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const App = () => {
  return (
    <Container
      className='song-bird__container'
      maxWidth="lg">
      <Grid container>
        <Grid item xs={12} >
          <Paper className='logo'>

            <h1>
              <img src={Bird} alt="bird"/>
              SongBird</h1>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

ReactDOM.render(<App/>, document.querySelector('.root'))
