import React, { Component } from "react";

export default class Person extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Aniket",
    };
    console.log("Constructor Called..");
  }
  changeState = () => {
    this.setState({
      name: "Aniket Bhau",
    });
    console.log("Button Click..");
  }

    static getDerivedStateFromProps(props,state){
        console.log(" getDerivedStateFromProps called...");
        console.log(props)
        console.log(state)
        return null
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate called...");
        console.log(nextProps);
        console.log(nextState);
        return false;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log(" getSnapshotBeforeUpdate... ");
        console.log(prevProps);
        console.log(prevState);
        return "Hello";
    }

    componentDidUpdate(prevProps,prevState,snapshot){
        console.log("componentDidUpdate called...");
        console.log(prevProps);
        console.log(prevState);
        console.log(snapshot);
    }

  

  render() {
    console.log("Render called ..");
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.props.city}</h1>
        <button onClick={this.changeState}>Change State</button>
      </div>
    );
  }
}
