import React, { Component } from 'react'
import { createRef } from 'react'

export default class Uncontrolled extends Component {
    constructor(props) {
      super(props)
    
     this.nameRef = createRef();
     this.ageRef = createRef();
    }
    componentDidMount(){
        console.log(this.nameRef);
        console.log(this.ageRef);
        this.nameRef.current.focus();
        this.nameRef.current.style.backgroundcolor="Blue";
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        console.log("NAME=", this.nameRef.current.value);
        console.log("AGE=", this.ageRef.current.value);
    }
  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
      <label htmlFor=''>ENTER NAME : </label>
      <input type="text" placeholder='Name' ref={this.nameRef}/>
      <br/>
      <br/>
      <label htmlFor=''>ENTER AGE : </label>
      <input type="number" placeholder='Age' ref={this.ageRef}/>
      <br/>
      <br/>
      <input type="submit" value="Submit" />
      
      </form>
      </div>
    )
  }
}
