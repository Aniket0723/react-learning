import React, { Component } from 'react'

export default class UnmountingC extends Component {
    componentWillUnmount(){
        console.log("componentWillUnmount Called..")
    }
  render() {
    return (
      <div>
      <h1>HEY ANIKET BROTHER..</h1>
      </div>
    )
  }
}
