import '../css/style.scss'
import React from "react"
import ReactDOM from 'react-dom'
import Container from "@material-ui/core/Container"



const App = () => {
  return (
    <Container
      className='container'
      maxWidth="lg">

    </Container>
  )
}

ReactDOM.render(<App/>, document.querySelector('.root'))
