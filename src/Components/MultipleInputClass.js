import React, { Component } from 'react'

export default class MultipleInputClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'',
         email:''
      }
    }
    handleChange = (e) =>{
        const value = e.target.value
        const name = e.target.name
        const new_value = (name === "email") ? value.toLowerCase().substring(0,20) : value;
        this.setState({
            [name]:new_value
        })
    // handleChange = (e) =>{
    //     console.log(e.target.value);
    //     console.log(e.target.name);
    //     const value = e.target.value
    //     const name = e.target.name
    //     this.setState({
    //         [name]:value
    //     })
    }
    // handleName = (e) =>{
    //     this.setState({
    //         name:e.target.value
    //     })
    // }
    // handleEmail = (e) =>{
    //     this.setState({
    //         email:e.target.value
    //     })
    // }
  render() {
    return (
      <div>
      <form>
      <label htmlFor=''>Enter Name : </label>
      <input type="text" name='name' value={this.state.name} onChange={this.handleChange} placeholder='ENTER YOUR NAME' />
      <br/>
      <label htmlFor=''>Enter Email : </label>
      <input type="text" name='email' value={this.state.email} onChange={this.handleChange} placeholder='ENTER YOUR EMAIL' />
      <br/>
      <input type="submit" value="Submit"/>

      </form>
      </div>
    )
  }
}
