import React, { Component } from 'react'
import UnmountingC from './UnmountingC'

export default class UnmountingP extends Component {

    constructor(props){
        super(props)

        this.state={
            active:true
        }
    }
    changeState = () =>{
        this.setState({
            active:false
        })
    }
  render() {
    console.log("Parent render called...")
    return (
      <div>
      {this.state.active ? <UnmountingC/> : <h1>Component Deleted.</h1>}
      <button onClick={this.changeState}>Change State</button>
      </div>
    )
  }
}
