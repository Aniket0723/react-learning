import React, { Component, createRef } from "react";

export default class RefComponents extends Component {
  constructor(props) {
    super(props);
    this.myRef = createRef();
  }
  componentDidMount() {
    console.log(this.myRef); 
    console.log(this.myRef.current.innerHTML);
  }
  handleHeading = () => {
    this.myRef.current.align = "right";
  };
  render() {
    return (
      <div>
        <h1 ref={this.myRef}>WELCOME HOME</h1>
        <button onClick={this.handleHeading}>CLICK</button>
      </div>
    );
  }
}
