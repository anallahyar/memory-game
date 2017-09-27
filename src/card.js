import React from "react"
import './card.css';

class Card extends React.Component {

  handleClick = () => {
    alert('I have been clicked')
  }

  render () {
    return (
      <div onClick = {this.handleClick} className='card'>
       <img src={this.props.src} />
      </div>
    )
  }
}

export default Card

// {} allow us to write JavaScript
// div is a countainer
