import React from "react"

// for components that have state we need to be able to write multiple functions within it

// this is adding functionality from another class; inheriting methods React has defined on the component

class Counter extends React.Component {

  state = {
    count: 10
  }

// define a function that we call when the button is clicked
// inside a class you don't need to use const

handleButtonClickAdd = () => {
  this.setState ({  count:this.state.count + 1  }) // this is a function given by extending our React class
}

handleButtonClickSubtract = () => {
  this.setState ({  count:this.state.count - 1  }) // this is a function given by extending our React class
}

  render () {
    return (
      <div>
          Count: {this.state.count}
          <button onClick={this.handleButtonClickAdd}> + </button>
          <button onClick={this.handleButtonClickSubtract}> - </button>
      </div>
    )
  }
}

export default Counter
