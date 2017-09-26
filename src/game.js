import React from "react"
import Card from "./card"

class Game extends React.Component {
  state = {
    cards: [
        { src: '/images/bus.jpg' },
        { src: '/images/ferry.jpg' },
        { src: '/images/metro.jpg' },
        { src: '/images/cyclist.jpg' },
        { src: '/images/sj.jpg' },
        { src: '/images/drivenow.jpg' },
        { src: '/images/bus.jpg' },
        { src: '/images/ferry.jpg' },
        { src: '/images/metro.jpg' },
        { src: '/images/cyclist.jpg' },
        { src: '/images/sj.jpg' },
        { src: '/images/drivenow.jpg' }
      ]
}

  render () {
    return (
          <div>
              <h1><center>memory</center>
              <br/>
              <div className = 'subhead'><center>match the modes to win!</center></div></h1>
// use curly brackets to run JavaScript
              {this.state.cards.map((card) => (
                <Card src={card.src} />
              ))}

          </div>
      )
  }
}

export default Game //tells us what can we get, defines the default export


// use width 90% and margin a set pixels (t.ex. 50px with auto)
