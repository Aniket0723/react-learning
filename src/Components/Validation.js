import React from "react";
import { useState } from "react";

function Validation() {
    const[name,setName]=useState();
    const[email,setEmail]=useState();
    const[nameError,setNameError]=useState(false);
    const[emailError,setEmailError]=useState(false);
    const emailReg =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ;
    const handleName = (e)=>{
        let name = e.target.value;
        if(name.length < 3){
            setNameError(true);
        }else{
            setNameError(false);
        }
        setName(name);
    }
    const handleEmail =(e) =>{
        let email=e.target.value;
        if(!email.match(emailReg)){
            setEmailError(true);
        }else{
            setEmailError(false);
        }
        setEmail(email);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        let name = e.target[0].value;
        if(name.length < 3){
            setNameError(true);
        }else{
            setNameError(false);
        }
        setName(name);

        let email=e.target[1].value;
        if(!email.match(emailReg)){
            setEmailError(true);
        }else{
            setEmailError(false);
        }
        setEmail(email);
        if((!name.length < 3) && (email.match(emailReg))){
            alert('Form has Been Submited');
            alert(name+email);
        }


       
    }
  return (
    <div>
      <h1>Form Validation</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">ENTER NAME: </label>
        <input type="text" name="name" onChange={handleName} value={name} required />
        <br/>
        {nameError ? <span style={{color:"red"}}>Name Length Must be Greater than 3 letter</span>:""}
        <br/>
        <label htmlFor="">ENTER EMAIL: </label>
        <input type="text" name="email" onChange={handleEmail} value={email} required />
        <br/>
        {emailError ? <span style={{color:"red"}}>Invalid Email</span>:""}
        <br/>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
}

export default Validation;
