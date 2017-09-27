import React from "react" // we need react to use react
import './card.css'; // just normal css, react injects into the <head> component

// defining a "Card" component.
// That component is inheriting functions from React.Component (constructor, props)

class Card extends React.Component {

// the function we call from onClick. We give it a name 'handleClick' and takes no arguments
// Because it's in this class, it has access to 'this' so it can use this.props.src
//
// this will call the "whenClicked" function which was passed into the Card as a prop from the Game component

  handleClick = () => {
    this.props.whenClicked(this.props.src)
  }

// render() is a required function for our component
// React will invoke this function when it mounts the component

  render () {

    // render function definition. NOT using arrow syntax
    // The render needs to return JSX.
    // JSX is basically HTML but you can use components as well
    // for example, when we render this card, we do so in the Game component by using <Card />
    //
    // props become an object, so className="foo" becomes { className: "foo"}
    // on this.props and onClick becomes { onClick: () => {} }

    return (
      <div onClick = {this.handleClick} className='card'>
       <img src={this.props.src} />
      </div>
    )
  }
}

// to be able to use 'import Card from "./card",  we need to export it
export default Card

// {} allow us to write JavaScript
// div is a countainer
