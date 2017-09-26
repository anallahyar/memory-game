import React from "react"
import Card from "./card"

const Game = () => (
  <div className='game'>
    <h1><center>memory</center>
    <br/>
    <div className = 'subhead'><center>match the modes to win!</center></div></h1>
      <Card src='/images/bus.jpg'/>
      <Card src='/images/ferry.jpg'/>
      <Card src='/images/metro.jpg'/>
      <Card src='/images/cyclist.jpg'/>
      <Card src='/images/sj.jpg'/>
      <Card src='/images/drivenow.jpg'/>
      <Card src='/images/bus.jpg'/>
      <Card src='/images/ferry.jpg'/>
      <Card src='/images/metro.jpg'/>
      <Card src='/images/cyclist.jpg'/>
      <Card src='/images/sj.jpg'/>
      <Card src='/images/drivenow.jpg'/>
  </div>
)

export default Game //tells us what can we get, defines the default export
