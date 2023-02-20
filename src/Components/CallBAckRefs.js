import React, { Component } from 'react'

export default class form  extends Component {
    constructor(props) {
      super(props)
      this.myRef = null;
      this.setMyRef = (e) =>{
        this.myRef =e;
      }
    }
    componentDidMount(){
        console.log(this.myRef);
        this.myRef.focus();
        
    }
    handleSubmit= (e) =>{
        e.preventDefault();
        this.myRef.style.backgroundColor = 'yellow';
    }
  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
      <label htmlFor=''>ENTER NAME : </label>
      <input type="text" ref={this.setMyRef} placeholder='Enter Your Name' />
      <br/>
      <br/>
      <input type="submit" value="Submit"/>
      </form>
      </div>
    )
  }
}
