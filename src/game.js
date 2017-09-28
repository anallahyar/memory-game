import React from "react"
import Card from "./card"
// var shuffle = require('shuffle-array')
import shuffle from "shuffle-array"
// const uuidv4 = require('uuid/v4');
import uuidv4 from "uuid/v4"


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
      isFlipped: false,
      id: uuidv4()
    }))
  }

// New function that will take one arguement, a "card src" (initial image url)
// This function will be called from the card component because we have
// passed it as a prop (called whenClicked) when we render the Card component
//
// To generate the new state, we need to .map over the old state and if the card
// we're mapping over is the clicked card, we need to set the "isFlipped" value to be true
// otherwise we don't need to change to state for that card
//
// Finally we call 'this.setState' with the new array we've built

    handleCardClicked = (clickedCardId) => {

      const newCardsState = this.state.cards.map((card) => {
        if (card.id === clickedCardId) {
          card.isFlipped = true
        }
        return card //this is each item in the array that we want to return
      })

      this.setState   ({ cards: newCardsState }, this.checkIfCardsMatched)
    }

    checkIfCardsMatched = () => {

      const flippedCards = this.state.cards.filter((card) => {
        return card.isFlipped
      })

      if (flippedCards.length === 2) {
        setTimeout (() => {
            // 
            // If (flippedCards[0].src === flippedCards[1].src) {
            //   console.log("matched")
            // }
            //
            // clearMatch = (card1, card2) => {
            //
            // }
            //
            const newCardsState = this.state.cards.map((card) => {
              card.isFlipped = false
              return card

            })

          this.setState  ({ cards: newCardsState })
        } , 1000)
      }
    }



// create a new instance of the Card component. With the following props:
  //  src: the url of the photo
  //  whenClicked: a callback function which the card can invoke when it is clicked
  // key: a unique identifier for React to use when rendering from our array
  // id: a unique identifier we can use to refer to this card later
  // isFlipped: a boolean which will be toggled

// key = {card.id} passing in this property (id) of our object

  render () {
    return (
          <div>
              <h1><center>memory</center>
              <br/>
              <div className = 'subhead'><center>match the modes to win!</center></div></h1>
              {this.state.cards.map((card) => (
                <Card
                    key = {card.id}
                    id = {card.id}
                    src={card.src}
                    isFlipped={card.isFlipped}
                    whenClicked={this.handleCardClicked} /> //updating render function to use the state
              ))}
          </div>
      )
  }
}

export default Game //tells us what can we get, defines the default export


// use width 90% and margin a set pixels (t.ex. 50px with auto)
// use curly brackets to run JavaScript
