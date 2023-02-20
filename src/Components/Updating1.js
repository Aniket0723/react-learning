import React, { Component } from 'react'
import Updating2 from './Updating2'

export default class Updating1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name1: "Aniet"
      }
    }
    changeState =() =>{
        console.log("Button Ckicked");
        this.setState({
            name1:"Anshul"
        })
    }
  render() {
    return (
      <div>
      <Updating2 name={this.state.name1}/>
      <button onClick={this.changeState}>Change State</button>
      </div>
    )
  }
}
