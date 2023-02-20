import React, { Component } from 'react'
import Mounting2 from './Mounting2'

export default class Mounting1 extends Component {
    constructor(props){
        super(props)
    
        this.state={
            name:"Ani"
        }
        console.log("Mounting 1 Consturctor Invoked..")
    }
    static getDerivedStateFromProps(props,state){

        console.log("Mounting 1 getDerivedStateFromProps Invoked..")
        console.log(props)
        console.log(state)
        return null
    }
    componentDidMount(){
        console.log("Mounting 1 componentDidMount Invoked..")
    }

  render() {
    console.log("Mounting 1 Render Invoked..")
    return (
      <div>
      <h1>{this.state.name}</h1>
      <h1>{this.props.city}</h1>
      <Mounting2 city="Mumbai"/>
      </div>
    )
  }
}
