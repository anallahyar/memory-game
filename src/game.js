import React from "react"
import Card from "./card"
// var shuffle = require('shuffle-array')
import shuffle from "shuffle-array"


const photos = [
    '/images/bus.jpg',
    '/images/ferry.jpg',
    '/images/metro.jpg',
    '/images/cyclist.jpg',
    '/images/sj.jpg',
    '/images/drivenow.jpg',
  ]

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: this.setupGame() //generating initial state
    }
  }

  setupGame = () => {
    const duplicatedPhotos = photos.concat(photos)
    const shuffledPhotos = shuffle(duplicatedPhotos)
    return shuffledPhotos.map((url) => ({
      src: url,
      isFlipped: false
    }))
  }

  render () {
    return (
          <div>
              <h1><center>memory</center>
              <br/>
              <div className = 'subhead'><center>match the modes to win!</center></div></h1>
              {this.state.cards.map((card) => (
                <Card src={card.src} /> //updating render function to use the state
              ))}
          </div>
      )
  }
}

export default Game //tells us what can we get, defines the default export


// use width 90% and margin a set pixels (t.ex. 50px with auto)
// use curly brackets to run JavaScript
