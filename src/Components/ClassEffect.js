import React, { Component } from 'react'

export default class ClassEffect extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        count:0
      }
    }
    componentDidMount(){
        console.log("componentDidMount Call..")
    }
    componentDidUpdate(){
        console.log("componentDidUpdate Calls..")
    }
    updateCount = () =>{
        this.setState({
            count :this.state.count+1
        })
    }
  render() {
    return (
      <div>
      <h1>{this.state.count}</h1>
      <button onClick={this.updateCount}>Update Count</button>
      
      </div>
    )
  }
}
