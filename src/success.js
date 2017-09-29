import React from "react" // we need react to use react
import './success.css'; // just normal css, react injects into the <head> component

class Success extends React.Component {

   render () {
     return (
        <div className = "success">
        <center>
        You win!
        </center>
        </div>
     )
  }
}

export default Success
