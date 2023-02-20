import React from "react";
import { useState } from "react";

function FuncitonInputs() {
  const [data, setData] = useState({
    name: "",
    email: " ",
  });

  const handleChange = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;
    const{name,value} =e.target;
    const new_value = (name === "email") ? value.toLowerCase().replace("#","@") : value;
    console.log(e.target);
    setData((prev) => {
        return{
            ...prev,[name]:new_value
        }
    })
    
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">ENTER NAME: </label>
        <input
          type="text"
          value={data.name}
          onChange={handleChange}
          name="name"
          placeholder="ENTER NAME"
        />
        <br />
        <br />
        <label htmlFor="email">ENTER EMAIL: </label>
        <input
          type="text"
          value={data.email}
          onChange={handleChange}
          name="email"
          placeholder="ENTER EMAIL"
        />
        
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default FuncitonInputs;
