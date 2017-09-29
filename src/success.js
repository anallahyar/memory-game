import React from "react" // we need react to use react
import './success.css'; // just normal css, react injects into the <head> component

class Success extends React.Component {

   render () {
     return (
        <div className = "success">
        <center>
        <br />
        <br />
        <br />
        ⚡ congratulations ⚡ <br />
        <h2>you have the memory of an elephant </h2>
        </center>
        </div>
     )
  }
}

export default Success
