import React, { Component } from "react";

export default class ControlledForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "",
    };
  }
  handleForm = (e) => {
    console.log(e.target.value);
    this.setState({
      // data:e.target.value.substring(0,15).toUpperCase()
      data: e.target.value,
    });
  };

  handleFormSubmition = (e) => {
    e.preventDefault();
    console.log(e.target[0].value.toLowerCase());
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmition}>
          <label htmlFor="">Enter Name:</label>
          <input
            type="text"
            value={this.state.data}
            onChange={this.handleForm}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
