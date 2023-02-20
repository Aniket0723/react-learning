import React, { Component } from 'react'

export default class Mounting2 extends Component {
    constructor(props){
        super(props)
    
        this.state={
            name:"Aniket"
        }
        console.log("Mounting 2 Consturctor Invoked..")
    }
    static getDerivedStateFromProps(props,state){

        console.log("Mounting 2 getDerivedStateFromProps Invoked..")
        console.log(props)
        console.log(state)
        return null
    }
    componentDidMount(){
        console.log("Mounting 2 componentDidMount Invoked..")
    }

  render() {
    console.log("Mounting 2 Render Invoked..")
    return (
      <div>
      <h1>{this.state.name}</h1>
      <h1>{this.props.city}</h1>
      </div>
    )
  }
}
